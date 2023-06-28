import { Link } from 'react-router-dom';
import '../styles/Navbar.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faHome, faPlus);


const Navbar = () => {
  return (
    <nav className='navbarBody'>
      <ul>
        <li>
        <Link to="/">
            <FontAwesomeIcon icon="home" /> Inicio
          </Link>
        </li>
        <li>
        <Link to="/crear">
            <FontAwesomeIcon icon="plus" /> Crear
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
