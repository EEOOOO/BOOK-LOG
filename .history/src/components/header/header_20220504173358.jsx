import React from 'react';
import styles from './header.module.css';
const Header = (props) => (
    <header>
        <img src="/images/logo.png" classNam={styles.logoImg} />
        <h1>Book List Maker</h1>
    </header>
    );

export default Header;