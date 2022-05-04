import React from 'react';
import styles from './header.module.css';
const Header = (props) => (
    <header>
        <img src="/images/logo.png" classNam={styles.logoImg} />
        <p>Book List Maker</p>
    </header>
    );

export default Header;