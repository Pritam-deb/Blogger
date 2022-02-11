import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import Header from "../../components/Header";
import Posts from "../../components/Posts";
import Sidebar from "../../components/Sidebar";
import "./homepage.css";

export default function Homepage() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </div>
  );
}
