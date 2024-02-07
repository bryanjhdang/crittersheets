import { Link } from 'react-router-dom';
import Header from '../utilities/Header';

function About() {
    return (
        <div className="App">
            <Header/>
            <header className="App-header">
                <p>This is the about page where we can plug our github and linkedin</p>
                <Link to="/">Go back</Link>
            </header>
        </div>
    );
}

export default About;