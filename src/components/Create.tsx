import { Link } from 'react-router-dom';
import Header from './Header';

function Create() {
    return (
        <div className="App">
            <Header/>
            <header className="App-header">
                <p>This is the character creation page where you can add a mouse</p>
                <Link to="/">Go back</Link>
            </header>
        </div>
    );
}

export default Create;