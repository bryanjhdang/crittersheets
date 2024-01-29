import { Link } from 'react-router-dom';

function About() {
    return (
        <div className="App">
            <header className="App-header">
                <p>This is the about page where we can plug our github and linkedin</p>
                <Link to="/">Go back</Link>
            </header>
        </div>
    );
}

export default About;