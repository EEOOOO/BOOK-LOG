import React from 'react';
import styles from './header.module.css';
const Header = (props) => (
    <header className={styles.header}>
        <img src="/images/logo.png" className={styles.logoImg} />
        <h1 className={styles.logoTitle}>Reading List Maker</h1>
    </header>
    );

export default Header;