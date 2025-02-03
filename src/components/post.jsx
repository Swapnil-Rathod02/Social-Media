import { useContext, useEffect } from "react";
import Post from "./postList";
import { PostList } from "../store/allcontext";

const Card = ({}) => {
  const { postData, addAllPost } = useContext(PostList);
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((getPosts) => addAllPost(getPosts.posts));
  }, []);

  return (
    <>
      {postData.map((dataObject) => (
        <Post dataObject={dataObject}></Post>
      ))}
    </>
  );
};
export default Card;
