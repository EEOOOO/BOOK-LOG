import React from 'react';
import styles from './header.module.css';
const Header = ({onLogout}) => (
    <header className={styles.header}>
        {onLogout && <button className={styles.logout} onClick={onLogout}>Logout</button>}
        <div className={styles.logo}>
            <img src="/images/logo.png" className={styles.logoImg} />
            {onLogout && <h2 className={styles.logoTitle}>Rlog</h2>}
        </div>
    </header>
    );

export default Header;