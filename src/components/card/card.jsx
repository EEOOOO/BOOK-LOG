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
        <div className={styles.bookInfo}>
            <h3 className={styles.title}>{`📚 ${bookTitle}`}</h3>
            <img src={url} className={styles.thumbnailImage}/>
            <p className={styles.author}>{author}</p>
            <p className={styles.publisher}>{publisher}</p>
            <p className={styles.starRate}>{starRate}</p>
        </div>
        <div className={styles.bookLog}>
            <h5 className={styles.readingHeader}>Before Reading</h5>
            <p className={styles.beforeReading}>{beforeReading}</p>
            <h5 className={styles.readingHeader}>After Reading</h5>
            <p className={styles.afterReading}>{afterReading}</p>
        </div>
        </li>

}

function getStyles(theme){
    switch(theme){
        case 'dark':
            return styles.dark;
        case 'light':
            return styles.light;
        case 'pink':
            return styles.pink;
            default:
                throw new Error(`unknown theme:${theme}`);
    }
}
export default Card;