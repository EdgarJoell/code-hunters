import { Link } from "react-router-dom";
import './Shared.css';
import '../App.css';
import longlogo from '../assets/longlogo.png';

export default function Header() {
  return (
    <div id="header-container">
      <div id="header">
        <img id="header-logo" src={longlogo} ></img>
        <div id="nav-section">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/browse">Browse</Link></li>
            <li><Link to="/featured">Featured</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

