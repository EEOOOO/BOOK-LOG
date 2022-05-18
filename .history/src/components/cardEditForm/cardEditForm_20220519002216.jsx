import React from 'react';
import Button from '../button/button';
import styles from './cardEditForm.module.css';
const CardEditForm = ({FileInput, card, updateCard, deleteCard}) => {
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
        deleteCard(card);
    };
    const onChange = (event) => {
        if (event.target == null){
            return;
        } 
        event.preventDefault();
        
        console.log(event);
        updateCard({
            ...card,
            [event.target.name] : event.target.value,
        })
    }
    return <form className={styles.cardEdit}>
        <div className={styles.bookInfo}>
            <div className={styles.info}>
                <span className={styles.infoText}>Title</span>
                <input className={styles.infoInput} type="text" name="bookTitle" value={bookTitle} onChange={onChange}/>
            </div>
            <div className={styles.info}>
                <span className={styles.infoText}>Author</span>
                <input className={styles.infoInput} type="text" name="author" value={author} onChange={onChange}/>
            </div>
            <div className={styles.info}>
                <span className={styles.infoText}>Publisher</span>
                <input className={styles.infoInput} type="text" name="publisher" value={publisher} onChange={onChange}/>
            </div>
        </div>
        <div className={styles.bookCardThemeAndRate}>
            <div className={styles.cardTheme}>
                <span className={styles.infoText}>Card Theme</span>
                <select name="theme" value={theme} onChange={onChange}>
                    <option value="light">light</option>
                    <option value="dark">dark</option>
                    <option value="pink">pink</option>
                </select>
            </div>
            <div className={styles.bookRate}>
                <span className={styles.infoText}>Star Rate</span>
                <select name="starRate" value="💙💙💙💙💙" onChange={onChange}>
                    <option value="💙💙💙💙💙">💙💙💙💙💙</option>
                    <option value="💙💙💙💙🤍">💙💙💙💙🤍</option>
                    <option value="💙💙💙🤍🤍">💙💙💙🤍🤍</option>
                    <option value="💙💙🤍🤍🤍">💙💙🤍🤍🤍</option>
                    <option value="💙🤍🤍🤍🤍">💙🤍🤍🤍🤍</option>
                    <option value="🤍🤍🤍🤍🤍">🤍🤍🤍🤍🤍</option>
                </select>   
            </div>
        </div>
        <div className={styles.bookReview}>
            <div className={styles.beforeReading}>
                <span className={styles.infoText}>Before reading</span>
                <textarea type="text" name="beforeReading" value={beforeReading} onChange={onChange}/>
            </div>
            <div className={styles.beforeReading}>
                <span className={styles.infoText}>After reading</span>
                <textarea type="text" name="afterReading" value={afterReading} onChange={onChange}/>
            </div>
        </div>
    
        <div className={styles.buttons}>
            <FileInput/>
            <Button name="Delete" onClick={onSubmit} />
        </div>
    </form>
 };

export default CardEditForm;