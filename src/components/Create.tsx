import { Link } from 'react-router-dom';

function Create() {
    return (
        <div className="App">
            <header className="App-header">
                <p>This is the character creation page where you can add a mouse</p>
                <Link to="/">Go back</Link>
            </header>
        </div>
    );
}

export default Create;