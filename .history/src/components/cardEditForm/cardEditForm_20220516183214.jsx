import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../Image_file_input/image_file_input';
import styles from './cardEditForm.module.css';
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
        <div className={styles.bookInfo}>
            <div className={styles.infoText}>
                <span>Title</span>
                <span>Author</span>
                <span>Publisher</span>
            </div>
            <div className={styles.infoInput}>
                <input type="text" name="title" value={bookTitle} />
                <input type="text" name="author" defaulValue={author} />
                <input type="text" name="publisher" defaulValue={publisher} />
            </div>
        </div>
        <select name="title" defaulValue={theme} >
            <option value="light">light</option>
            <option value="dark">dark</option>
            <option value="pink">pink</option>
        </select>
        <textarea type="text" name="title" defaulValue={beforeReading} />
        <textarea type="text" name="title" defaulValue={afterReading} />
        <select name="starRate" defaulValue="💙💙💙💙💙">
            <option value="💙💙💙💙💙">💙💙💙💙💙</option>
            <option value="💙💙💙💙🤍">💙💙💙💙🤍</option>
            <option value="💙💙💙🤍🤍">💙💙💙🤍🤍</option>
            <option value="💙💙🤍🤍🤍">💙💙🤍🤍🤍</option>
            <option value="💙🤍🤍🤍🤍">💙🤍🤍🤍🤍</option>
            <option value="🤍🤍🤍🤍🤍">🤍🤍🤍🤍🤍</option>
        </select>
        <div className={styles.buttons}>
            <ImageFileInput/>
            <Button name="Delete" onCLick={onSubmit}/>
        </div>
    </form>
 };

export default CardEditForm;