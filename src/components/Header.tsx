import styles from './Header.module.css';
import Logo from '../assets/images/logo.svg';
export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src={Logo} alt="Rocket" />
        <h1 className={styles.title}> 
          <span className={styles.highlightBlue}>to</span>
          <span className={styles.highlightPurple}>do</span>
        </h1>
      </div>
    </header>
  )
}