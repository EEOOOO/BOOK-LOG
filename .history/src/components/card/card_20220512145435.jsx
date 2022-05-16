import React from 'react';
import styles from './card.module.css';
const DEFAULT_IMAGE = '/images/logo.png';

const Card = ({card}) => {
    const {
        id,
        bookTitle,
        author,
        publisher,
        theme,
        beforeReading,
        afterReading,
        starRate,
        fileName,
        fileUrl,
    } = card;
    const url = fileUrl || DEFAULT_IMAGE;
    return <li className={`${styles.card} ${getStyles(theme)}`}>
        <h3>{`📚 ${card.bookTitle}`}</h3>
        <p className={styles.thumbnail}><img src={url}/></p>
        <p className={styles.title}>{bookTitle}</p>
        <p className={styles.author}>{author}</p>
        <p className={styles.publisher}>{publisher}</p>
        <p className={styles.beforeReading}>{beforeReading}</p>
        <p className={styles.afterReading}>{afterReading}</p>
        <p className={styles.starRate}>{starRate}</p>
        </li>

}

function getStyles(theme){
    switch(theme){
        case 'dark':
            return styles.dark;
        case 'light':
            return styles.light;
        case 'colorful':
            return styles.colorful;
            default:
                throw new Error(`unknown theme:${theme}`);
    }
}
export default Card;