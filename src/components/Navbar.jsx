import { useState } from 'react';
import '../styles/Navbar.css';
import Button from './Button';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <div className="menu-toggle" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a className='nav-links' href="#top">Home</a></li>
            <li><a className='nav-links' href="#sobre">Sobre</a></li>
            <li><a className='nav-links' href="#projetos">Projetos</a></li>
          </ul>
          <div className="button-container">
            <a href="https://wa.me/5548998033577"> 
            <Button text="Entre em Contato!" />
            </a> 
          </div>
          <ul className={`menu-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#top">Home</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#projetos">Projetos</a></li>
          </ul>
        </div>
      </nav>
    );
};

export default Navbar;
