import React from 'react';
import styles from './header.module.css';
const Header = ({onLogout}) => (
    <header className={styles.header}>
        {onLogout && <button className={styles.logout} onClick={onLogout}>Logout</button>)}
        <img src="/images/logo.png" className={styles.logoImg} />
        {onLogout && <h1 className={styles.logoTitle}>Rlog</h1>}
    </header>
    );

export default Header;