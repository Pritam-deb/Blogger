// import { useLocation } from "react-router";
import Header from "../../components/Header";
import Posts from "../../components/Posts";
import Sidebar from "../../components/Sidebar";
import Login from "../login/Login";
import { Settings } from "../settings/Settings";
import Single from "../singlePost/Single";
import Write from "../write/Write";
import "./homepage.css";

export default function Homepage() {
  // const location = useLocation();
  // console.log(location);
  return (
    <div>
      {/* <Header /> */}
      <div className="home">
        {/* <Posts/> */}
        {/* <Single/> */}
        {/* <Write/> */}
        {/* <Settings/> */}
        {/* <Sidebar/> */}
      </div>
    </div>
  );
}