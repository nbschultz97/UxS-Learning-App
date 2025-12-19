import React from 'react';
import { NavLink } from 'react-router-dom';
import './Layout.css';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/modules', label: 'Modules' },
  { to: '/roles', label: 'Roles' },
  { to: '/drills', label: 'Drills' },
  { to: '/skills', label: 'Skills' },
  { to: '/search', label: 'Search' },
  { to: '/progress', label: 'Progress' },
  { to: '/references', label: 'References' },
];

const Layout = ({ children }) => (
  <div className="app-shell">
    <header className="app-header">
      <h1>UxS Learning</h1>
    </header>
    <main className="app-main">{children}</main>
    <nav className="app-nav">
      {navItems.map((item) => (
        <NavLink key={item.to} to={item.to} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  </div>
);

export default Layout;
