import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Landing } from './components/Landing';
import { Footer } from './components/Layout';


function App() {
	return (
		// <Router>
		//     <Routes>
		//         {/* <Route path="/" */}
		//             {/* element={<About />} /> */}
		//     </Routes>
		// </Router>
		<>
			<Landing />
			<Footer />
		</>
	);
}

export default App
