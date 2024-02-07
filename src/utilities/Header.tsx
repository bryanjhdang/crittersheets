import './Header.css'

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-8">
      <h1 className="text-4xl font-pirata custom-yellow-hover-bg">Mausritter Character Sheet</h1>
      <nav>
        <ul className="flex space-x-5">
          <li><a href="#" className="font-pirata underline custom-yellow-hover-bg">My Characters</a></li>
          <li><a href="#" className="font-pirata underline custom-yellow-hover-bg">About</a></li>
          <li><a href="#" className="font-pirata underline custom-yellow-hover-bg">Log Out</a></li>
        </ul>
      </nav>
    </header>
  );
};