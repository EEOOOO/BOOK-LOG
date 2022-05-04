import React from 'react';
import styles from './header.module.css';
const Header = (props) => (
    <header>
        <img src="/images/logo.png" classNam={styles.logoImg} />
        <H1>Book List Maker</H1>
    </header>
    );

export default Header;