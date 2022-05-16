import React from 'react';
import Button from '../button/button';
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
    const onSubmit = () => {

    };
    return <form>
        <input type="text" name="title" value={bookTitle} />
        <input type="text" name="title" value={author} />
        <input type="text" name="title" value={publisher} />
        <select name="title" value={theme} >
            <option value="light">light</option>
            <option value="dark">dark</option>
            <option value="pink">pink</option>
        </select>
        <textarea type="text" name="title" value={beforeReading} />
        <textarea type="text" name="title" value={afterReading} />
        <select name="starRate" value="💙💙💙💙💙">
            <option value="💙💙💙💙💙">💙💙💙💙💙</option>
            <option value="💙💙💙💙🤍">💙💙💙💙🤍</option>
            <option value="💙💙💙🤍🤍">💙💙💙🤍🤍</option>
            <option value="💙💙🤍🤍🤍">💙💙🤍🤍🤍</option>
            <option value="💙🤍🤍🤍🤍">💙🤍🤍🤍🤍</option>
            <option value="🤍🤍🤍🤍🤍">🤍🤍🤍🤍🤍</option>
        </select>
        <ImageFileInput/>
        <Button name="Delete" onCLick={onSubmit}/>
    </form>
 };

export default CardEditForm;