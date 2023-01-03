const Navbar = () => {
  return (
    <nav className="navbar bg-body-secondary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Antonio Tirone
        </a>
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <a className="nav-link" href="/contacts">
              Contacts
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
