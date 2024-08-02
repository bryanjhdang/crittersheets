import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { Landing } from './components/pages/Landing';
import { Layout } from './components/Layout';
import { CharacterSheet } from './components/pages/CharacterSheet';
import { CharacterCreator } from './components/pages/CharacterCreator';
import { NoPage } from './components/pages/NoPage';
import CharacterForm from './components/pages/CharacterForm';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Landing />} />
					<Route path="create" element={<CharacterForm />} />
					<Route path="sheet" element={<CharacterSheet />} />
					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App
