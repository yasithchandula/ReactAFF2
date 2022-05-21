import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import SideNav from "./components/SideNav/SideNav";
import LoginPage from "./Pages/Login/LoginPage";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Blank from "./Pages/blank";
import Login from "./Pages/Login/LoginPage"

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/test" element={<Blank/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </div>
      </BrowserRouter>
      {/* <LoginPage></LoginPage> */}
    </div>
  );
}

export default App;
