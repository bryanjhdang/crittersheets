import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./about/About";
import Create from "./creation/Create";
import Sheet from "./sheet/Sheet";
import Characters from "./characters/Characters";

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
