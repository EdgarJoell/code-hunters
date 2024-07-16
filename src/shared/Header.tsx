import { Link } from "react-router-dom";
import './Shared.css';
import '../App.css';
import longlogo from '../assets/longlogo.png';

export default function Header() {
  return (
    <div id="header-container">
      <div id="header">
        <Link to="/" id="logo-link"><img id="header-logo" src={longlogo} ></img></Link>
        <div id="nav-section">
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/browse">BROWSE</Link></li>
            <li><Link to="/featured">FEATURED</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

