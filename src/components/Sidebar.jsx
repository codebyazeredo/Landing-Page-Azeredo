import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Menu</h2>
      <ul className="sidebar-menu">
        <li className="icon-item">
          <a href="https://github.com/codebyazeredo" target="_blank" rel="noopener noreferrer" className="icon-link github" title="GitHub">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li className="icon-item">
          <a href="https://www.instagram.com/matheusaazeredo?igsh=MWZkbWxya2FkeXcxaQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="icon-link instagram" title="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li className="icon-item">
          <a href="https://www.linkedin.com/in/matheus-azeredo-89bbb7279/" target="_blank" rel="noopener noreferrer" className="icon-link linkedin" title="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li className="icon-item">
          <a href="https://www.figma.com/files/team/1407673164471991293/recents-and-sharing/recently-viewed?fuid=1407673160390811363" target="_blank" rel="noopener noreferrer" className="icon-link figma" title="figma">
            <i className="fab fa-figma"></i>
          </a>
        </li>
        <li className="icon-item">
          <a href="mailto:matheus.azeredo@hotmail.com" className="icon-link email" title="Email">
            <i className="fas fa-envelope"></i>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
