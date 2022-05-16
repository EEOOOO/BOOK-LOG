import React from 'react';

const DEFAULT_IMAGE = '/images/logo/png';

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
    return <ul>
        <h3>{`📚 ${card.bookTitle}`}</h3>
        <li><img src={url}/></li>
        <li>{bookTitle}</li>
        <li>{author}</li>
        <li>{publisher}</li>
        <li>{beforeReading}</li>
        <li>{afterReading}</li>
        <li>{starRate}</li>
        </ul>

}

export default Card;