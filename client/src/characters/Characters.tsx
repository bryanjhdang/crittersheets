import { useNavigate } from 'react-router-dom';
import Header from '../utilities/Header';
import { Inventory } from '@critter/common';
 
function Characters() {
    const navigate = useNavigate();

    const inventory = new Inventory([]);
 
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
            <Header/>
            <header className="App-header">
                <p>this is the main page where you view all your characters</p>

                <button onClick={goToAboutComponent}>
                    about page
                </button>
                <button onClick={goToSheetComponent}>
                    character sheet
                </button>
                <button onClick={goToCreateComponent}>
                    character creation
                </button>
            </header>
        </div>
    );
}
 
export default Characters;