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
    return <form>
        <input type="text" name="title" value={bookTitle} />
        <input type="text" name="title" value={author} />
        <input type="text" name="title" value={publisher} />
        <select name="title" value={theme} >
            <option value="light"></option>
            <option value="dark"></option>
            <option value="pink"></option>
        </select>
        <textarea type="text" name="title" value={beforeReading} />
        <textarea type="text" name="title" value={afterReading} />
        <input type="text" name="title" value={starRate} />
    </form>
 };

export default CardEditForm;