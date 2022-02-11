import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components and pages
import NavBar from "./components/NavBar";
import Homepage from "./pages/Home/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Single from "./pages/singlePost/Single";

function App() {
  const currentUser = false;
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/posts" element={<Homepage />} />
        <Route
          path="/register"
          element={currentUser ? <Homepage /> : <Register />}
        />
        <Route path="/login" element={currentUser ? <Homepage /> : <Login />} />
        {}
        <Route path="/post/:id" element={<Single />} />
        <Route path="/write" element={currentUser ? <Write /> : <Login />} />
        {}
        <Route
          path="/settings"
          element={currentUser ? <Settings /> : <Login />}
        />
      </Routes>
    </Router>
  );
}

export default App;
