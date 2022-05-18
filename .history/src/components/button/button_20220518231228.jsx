import React from 'react';
import styles from './button.module.css';

const Button = ({name, deleteCard}) => (
            <button className={styles.button} onClick={deleteCard}>
                {name}
            </button>
    );

export default Button;