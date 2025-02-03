import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/allcontext";
const Post = ({ dataObject }) => {
  const { deletepost } = useContext(PostList);

  return (
    <div className="card postcard " style={{ width: "25rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {dataObject.tittle}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletepost(dataObject.id)}
          >
            <MdDelete />
            <span className="visually-hidden">unread messages</span>
          </span>
        </h5>
        <p className="card-text">{dataObject.postcaption}</p>
        {dataObject.tag.map((tags) => (
          <span key={tags} className="badge text-bg-primary tags">
            {tags}
          </span>
        ))}
        <div className="alert alert-info reaction" role="alert">
          {dataObject.commnet}
        </div>
      </div>
    </div>
  );
};
export default Post;
