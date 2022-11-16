import Logo from '../assets/logo.svg';
import styles from './Header.module.css';

export const Header = function () {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={Logo} alt="Logo da aplicação" />
    </header>
  );
};
