import React from "react";
import { Link } from "react-router-dom";
import Posts from "./Posts";
import "./styles/post.css";

const Post = ({ post }) => {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {/* <Link className="link" to="/posts?cat=Music"> */}
          {post.categories.map((category) => (
            <span className="postCat">{category.name}</span>
          ))}
          {/* </Link> */}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">{new Date(post.date).toDateString()}</span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
};

export default Post;
