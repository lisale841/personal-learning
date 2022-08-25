import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./components/navBar/navBar"
import Animals from "./components/animals/Animals"
import HomePage from "./components/homePage/Homepage"
function App() {
  return (
    <div className="container">
    <div>
    <Router>
      <Routes>
        <Route path='/' element={<NavBar />} >
           <Route path='/' element={<HomePage/>} />
          <Route path='animals' element={<Animals/>} />
        </Route>
      </Routes>
    </Router>
    </div>
    </div>
  );
}

export default App;
