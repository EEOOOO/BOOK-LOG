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
    return <li className={StyleSheet.card}>
        <h3>{`📚 ${card.bookTitle}`}</h3>
        <p><img src={url}/></p>
        <p>{bookTitle}</p>
        <p>{author}</p>
        <p>{publisher}</p>
        <p>{beforeReading}</p>
        <p>{afterReading}</p>
        <p>{starRate}</p>
        </li>

}

export default Card;