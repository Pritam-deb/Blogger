// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components and pages
import NavBar from './components/NavBar';
import Homepage from "./pages/Home/Homepage";
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
  return (
    <div>
    
    <NavBar/>
    {/* <Homepage/> */}
    {/* <Login/> */}
    <Register/>

    </div>
      
    
  );
}

export default App;
