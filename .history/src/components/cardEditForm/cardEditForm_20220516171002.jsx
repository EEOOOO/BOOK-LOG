import React from 'react';

const CardEditForm = ({card}) => {
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
    return <h3>{`🔥 ${card.bookTitle}`}</h3>
 };

export default CardEditForm;