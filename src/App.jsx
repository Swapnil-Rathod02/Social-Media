import Header from "./components/header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import Form from "./components/createForm";
import Card from "./components/post";
import { useState } from "react";
import PostListprovider from "./store/allcontext";

function App() {
  const [postvalue, postmethod] = useState("Home");

  return (
    <PostListprovider>
      <div className="app-container">
        <Sidebar postvalue={postvalue} postmethod={postmethod}></Sidebar>
        <div className="content">
          <Header></Header>
          {postvalue === "Home" ? <Card></Card> : <Form></Form>}

          <Footer></Footer>
        </div>
      </div>
    </PostListprovider>
  );
}

export default App;
