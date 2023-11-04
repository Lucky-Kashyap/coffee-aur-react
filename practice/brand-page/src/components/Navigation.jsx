import logo from '../assets/brand_logo.png';

const Navigation = () => {
    return (
      <nav className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
  
        <button>login</button>
      </nav>
    );
  };
  
  export default Navigation;
  