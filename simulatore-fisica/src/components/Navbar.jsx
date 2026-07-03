import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const links = [
  { to: '/',             label: 'Home',        icon: '🏠', match: /^\/$/ },
  { to: '/argomenti',   label: 'Argomenti',   icon: '📚', match: /^\/argomento/ },
  { to: '/esami',       label: 'Esami V/F',   icon: '📝', match: /^\/esami$|^\/esame\// },
  { to: '/esami-reali', label: 'Esami Reali', icon: '🎯', match: /^\/esami-reali|^\/esame-reale/ },
  { to: '/temi-esame',  label: 'Temi',        icon: '📖', match: /^\/temi-esame/ },
  { to: '/pratica',     label: 'Esercizi',    icon: '✍️', match: /^\/pratica/ },
  { to: '/statistiche', label: 'Statistiche', icon: '📊', match: /^\/statistiche/ },
];

function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">⚛️ Fisica</Link>
      <div className="navbar-links">
        {links.map(({ to, label, icon, match }) => (
          <Link
            key={to}
            to={to}
            className={`nav-link ${match.test(pathname) ? 'active' : ''}`}
          >
            <span className="nav-icon">{icon}</span>
            <span className="nav-label">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;