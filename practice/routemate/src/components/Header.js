import { Link, NavLink } from 'react-router-dom';
import logo1 from '../assets/head.jpeg';

export const Header = () => {
    return (
      <header>
        {/* <a href="/" className="logo">
            <img src={logo} alt="logo" />
            <span>Routemate</span>
        </a>
        <nav className="navigation">
        <a href="/" className='link'>Home</a>
        <a href="/products" className='link'>Products</a>
        <a href="/contact" className='link'>Contact</a>

        </nav> */}

<Link to="/" className="logo">
            <img src={logo1} alt="logo" />
            <span>Routemate</span>
        </Link>
        <nav className="navigation">
        <NavLink to="/" className='link' end>Home</NavLink>
        <NavLink to="/products" className='link'>Products</NavLink>
        <NavLink to="/contact" className='link'>Contact</NavLink>

        {/* <Link to="/" className='link'>Home</Link>
        <Link to="/products" className='link'>Products</Link>
        <Link to="/contact" className='link'>Contact</Link> */}

        </nav>
      </header>
    )
  }
  