import { Outlet } from 'react-router-dom';
import Header from './shared/Header';
import Footer from './shared/Footer';
import './App.css';

export default function Layout() {
  return (
    <div id="container">
      <Header />
      <div id="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}