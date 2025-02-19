import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

export const Footer = () => {
  return (
    <div className="footer">
      <nav className="Iconbar">
        <FontAwesomeIcon icon="fa-solid fa-house-chimney" />
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        <img src="Frontend/vite-project/Upload/Äffchen.png" alt="Profile" />
      </nav>

      <p>
        <FontAwesomeIcon icon={faCopyright} />
        Copyright 2025 Mikihana
      </p>
    </div>
  );
};
