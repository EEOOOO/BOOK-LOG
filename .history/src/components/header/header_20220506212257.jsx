import React from 'react';
import styles from './header.module.css';
const Header = ({onLogout}) => (
    <header className={styles.header}>
        {true && <button className={styles.logout} onClick={onLogout}>Logout</button>}
        <img src="/images/logo.png" className={styles.logoImg} />
        {false && <h1 className={styles.logoTitle}>Reading List Maker</h1>}
    </header>
    );

export default Header;