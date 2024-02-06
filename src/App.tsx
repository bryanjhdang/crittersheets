import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./components/About";
import Create from "./components/Create";
import Sheet from "./components/Sheet";
import Characters from "./components/Characters";

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/about"
                element={<About />} />
            <Route path="/create"
                element={<Create />} />
            <Route path="/sheet"
                element={<Sheet />} />
            <Route path="/"
                element={<Characters />} />
        </Routes>
    </Router>
  );
}

export default App
