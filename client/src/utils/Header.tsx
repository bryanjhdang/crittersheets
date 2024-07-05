import { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css'

export default function Header() {
  const navigate = useNavigate();

  const goToAbout = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    navigate('/about');
  };

  const goToCharacters = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    navigate('/');
  }

  const logOut = () => {
    // Needs to be implemented
  }

  return (
    <header className="flex justify-between items-center py-4 px-8">
      <a href="#" onClick={goToCharacters} className="text-4xl font-pirata custom-yellow-hover-bg">Mausritter Character Sheet</a>
      <nav>
        <ul className="flex space-x-5">
          <li><a href="#" onClick={goToCharacters} className="font-pirata underline custom-yellow-hover-bg">My Characters</a></li>
          <li><a href="#" onClick={goToAbout} className="font-pirata underline custom-yellow-hover-bg">About</a></li>
          <li><a href="#" onClick={logOut} className="font-pirata underline custom-yellow-hover-bg">Log Out</a></li>
        </ul>
      </nav>
    </header>
  );
};