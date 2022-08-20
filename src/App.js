import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./components/navBar/NavBar"
import Animals from "./components/animals/Animals"
function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route path='animals' element={<Animals/>} />
        </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
