import { useNavigate } from 'react-router-dom';

function Characters() {
	const navigate = useNavigate();

	const goToAboutComponent = () => {
		navigate('/about');
	};

	const goToSheetComponent = () => {
		navigate('/sheet');
	};

	const goToCreateComponent = () => {
		navigate('/create');
	};

	return (
		<div className="App">
			<header className="App-header">
				<p>this is the main page where you view all your characters</p>

				<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded mr-2" onClick={goToAboutComponent}>
					about page
				</button>
				<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded mr-2" onClick={goToSheetComponent}>
					character sheet
				</button>
				<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded mr-2" onClick={goToCreateComponent}>
					character creation
				</button>
			</header>
		</div>
	);
}

export default Characters;