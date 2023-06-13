import Home from "./component/Home";
import "./app.css"
import insuranceLogo from "../src/image/insuranceLogo.svg"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Database from "./component/Database";
import NotFound from "./component/NotFound";
import NavBar from "./component/NavBar";


function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/database" element={<Database />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );

}

export default App;
