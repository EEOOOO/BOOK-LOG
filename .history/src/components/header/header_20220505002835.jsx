import React from 'react';
import styles from './header.module.css';
const Header = (props) => (
    <header>
        <img src="/images/logo.png" className={styles.logoImg} />
        <h1 className={styles.title}>BookLog Maker</h1>
    </header>
    );

export default Header;