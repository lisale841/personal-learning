import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./components/navBar/navBar"
import Animals from "./components/animals/Animals"
import Home from "./components/homePage/Home"
import Foods from "./components/food/Foods"
function App() {
  return (
    <div className="container">
    <div>
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/animals' element={<Animals/>} />
         <Route path='/foods' element={<Foods/>} />
        {/* </Route> */}
      </Routes>
    </Router>
    </div>
    </div>
  );
}
export default App;
