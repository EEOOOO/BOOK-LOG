import React from 'react';

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
    return <li className={styles.card}>
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

export default Card;