import { Link } from 'react-router-dom';
import Header from '../utilities/Header';
import { stats } from '../classes/sheet/stats';

interface Props {
    sheet: stats;
}

function Sheet() {
    return (
        <div className="App">
            <Header/>
            <header className="App-header">
                <p>This is the character sheet component where it loads information based on the info passed in, and you can edit values (needs to take in params)</p>
                <Link to="/">Go back</Link>
            </header>

            <label htmlFor="name" className='statLabel m-4 p-2 w-8'>Dex</label>
            <input type='text' id = "name" className='bg-blue-400 outline-black-100' ></input>

        </div>
    );
}

export default Sheet;