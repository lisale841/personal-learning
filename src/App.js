import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./components/navBar/NavBar"
import Animals from "./components/animals/Animals"
function App() {
  return (
    <div>
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/animals' component={Animals} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
