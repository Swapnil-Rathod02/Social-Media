import { createContext, useReducer } from "react";

const PostList = createContext({});
export { PostList };
let data = [
  {
    id: "1",
    tittle: "this is first react project",
    reaction: 15,
    postcaption: "this goona be fun ",
    tag: ["exciting", "thriller"],
    commnet: "this is comment",
  },
  {
    id: "2",
    tittle: "i will make this project ",
    reaction: 10,
    postcaption: "everything gonna be okay",
    tag: ["staypostive", "justling"],
    commnet: "this is comment",
  },
];
function reducer(pos, action) {
  let newData;
  console.log(pos);

  if (action.key === "DELETE_POST") {
    newData = pos.filter((ob) => ob.id !== action.payload.id);
  } else if (action.key === "ADD_POST") {
    newData = [action.payload, ...posts];
  } else if (action.key === "ADD_ALL_POSTS") {
  }

  return newData;
}

function PostListprovider({ children }) {
  const [postData, dispatch] = useReducer(reducer, data);
  const addpost = (userID, caption, tittle, taglist, comment) => {
    // console.log(userID, caption, tittle, taglist);
    dispatch({
      key: "ADD_POST",
      payload: {
        id: Date.now(),
        tittle: tittle,
        reaction: 15,
        postcaption: caption,
        tag: taglist,
        commnet: comment,
      },
    });
  };
  const addAllPost = (PostsList) => {
    // dispatch({
    //   key: "ADD_ALL_POSTS",
    //   payload: {
    //     PostsList,
    //   },
    // });
  };
  const deletepost = (postId) => {
    dispatch({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  return (
    <PostList.Provider value={{ postData, addpost, deletepost, addAllPost }}>
      {children}
    </PostList.Provider>
  );
}
export default PostListprovider;
