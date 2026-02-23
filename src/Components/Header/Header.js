import { NavLink, Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <div className="Header">
            <div className="Logo">
                <Link className="Logo" to="/"><h1>James Dalziel</h1></Link>
                <span>VFX Artist</span>
            </div>
            <div className="Nav">
                <ul>
                    <li><NavLink to="/" className={({ isActive}) => (isActive ? "active-nav" : "pending-nav")}>Featured</NavLink></li>
                    <li><NavLink to="/demo-reel" className={({ isActive}) => (isActive ? "active-nav" : "pending-nav")}>Demo Reel</NavLink></li>
                    <li><NavLink to="/tv-work" className={({ isActive}) => (isActive ? "active-nav" : "pending-nav")}>TV</NavLink></li>
                    <li><NavLink to="/game-work" className={({ isActive}) => (isActive ? "active-nav" : "pending-nav")}>Game</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive}) => (isActive ? "active-nav" : "pending-nav")}>About</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Header