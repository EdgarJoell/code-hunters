import { Link } from "react-router-dom";
import './Shared.css';
import '../App.css';

export default function Header() {
  return (
    <div id="header-container">
      <div id="header">
        <div>
          <h1 id="header-title">Code Hunters</h1>
        </div>
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

