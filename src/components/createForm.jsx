import { useContext, useRef } from "react";
import { PostList } from "../store/allcontext";

const Form = () => {
  const userIDElement = useRef();
  const captionElement = useRef();
  const tagElement = useRef();
  const tittleElement = useRef();
  const commentElement = useRef();

  const { addpost } = useContext(PostList);

  const handlAaddOn = (event) => {
    event.preventDefault();
    const userID = userIDElement.current.value;
    const caption = captionElement.current.value;
    const taglist = tagElement.current.value.split(" "); //split will convert string into array
    const tittle = tittleElement.current.value;
    const comment = commentElement.current.value;

    addpost(userID, tittle, caption, taglist, comment);
  };
  return (
    <form className="createPost" onSubmit={handlAaddOn}>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          ref={userIDElement}
          placeholder="userID"
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="tittle"
          ref={tittleElement}
          aria-describedby="emailHelp"
          placeholder="tittle"
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          ref={captionElement}
          placeholder="caption"
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="tags"
          ref={tagElement}
          placeholder="tags"
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          ref={commentElement}
          placeholder="comment"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        post
      </button>
    </form>
  );
};
export default Form;
