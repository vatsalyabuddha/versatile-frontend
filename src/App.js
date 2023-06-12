import Home from "./component/Home";
import "./app.css"
import insuranceLogo from "../src/image/insuranceLogo.svg"
function App() {
  return (
    <div className="app">
      <div className='insuranceLogo'> <img src={insuranceLogo} alt="logo" /> </div>
      <Home />
    </div>
  );
}

export default App;
