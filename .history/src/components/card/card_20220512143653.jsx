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
    return <h3>{`📚 ${card.bookTitle}`}</h3>
}

export default Card;