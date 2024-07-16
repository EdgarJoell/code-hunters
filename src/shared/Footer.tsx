import { Link } from 'react-router-dom';
import './Shared.css';
import stackedLogo from '../assets/stackedlogo.png';

export default function Footer() {
   return (
      <div id="footer-container">
         <Link to="/"><img id="footer-image" src={stackedLogo} /></Link>
      </div>
   )
}