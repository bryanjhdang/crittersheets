import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Mausritter Character Sheet</h1>
      <nav className="header-nav">
        <ul>
          <li><a href="#">My Characters</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Log Out</a></li>
        </ul>
      </nav>
    </header>
  );
};