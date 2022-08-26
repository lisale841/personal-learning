import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./components/navBar/navBar"
import Animals from "./components/animals/Animals"
import HomePage from "./components/homePage/HomePage"
function App() {
  return (
    <div className="container">
    <div>
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/animals' element={<Animals/>} />
        {/* </Route> */}
      </Routes>
    </Router>
    </div>
    </div>
  );
}

export default App;
