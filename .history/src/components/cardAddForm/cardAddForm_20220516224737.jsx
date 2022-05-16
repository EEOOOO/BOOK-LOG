import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../Image_file_input/image_file_input';
import styles from './cardAddForm.module.css';
const CardAddForm = () => {
    
    const onSubmit = () => {

    };
    return (
    <form className={styles.cardEdit}>
        <div className={styles.bookInfo}>
            <div className={styles.info}>
                <span className={styles.infoText}>Title</span>
                <input className={styles.infoInput} type="text" name="title" placeholder="bookTitle" />
            </div>
            <div className={styles.info}>
                <span className={styles.infoText}>Author</span>
                <input className={styles.infoInput} type="text" name="author" placeholder="author" />
            </div>
            <div className={styles.info}>
                <span className={styles.infoText}>Publisher</span>
                <input className={styles.infoInput} type="text" name="publisher" placeholder="publisher" />
            </div>
        </div>
        <div className={styles.bookCardThemeAndRate}>
            <div className={styles.cardTheme}>
                <span className={styles.infoText}>Card Theme</span>
                <select name="title" placeholder="theme" >
                    <option placeholder="light">light</option>
                    <option placeholder="dark">dark</option>
                    <option placeholder="pink">pink</option>
                </select>
            </div>
            <div className={styles.bookRate}>
                <span className={styles.infoText}>Star Rate</span>
                <select name="starRate" placeholder="💙💙💙💙💙">
                    <option placeholder="💙💙💙💙💙">💙💙💙💙💙</option>
                    <option placeholder="💙💙💙💙🤍">💙💙💙💙🤍</option>
                    <option placeholder="💙💙💙🤍🤍">💙💙💙🤍🤍</option>
                    <option placeholder="💙💙🤍🤍🤍">💙💙🤍🤍🤍</option>
                    <option placeholder="💙🤍🤍🤍🤍">💙🤍🤍🤍🤍</option>
                    <option placeholder="🤍🤍🤍🤍🤍">🤍🤍🤍🤍🤍</option>
                </select>   
            </div>
        </div>
        <div className={styles.bookReview}>
            <div className={styles.beforeReading}>
                <span className={styles.infoText}>Before reading</span>
                <textarea type="text" name="title" placeholder="beforeReading" />
            </div>
            <div className={styles.beforeReading}>
                <span className={styles.infoText}>After reading</span>
                <textarea type="text" name="title" placeholder="afterReading" />
            </div>
        </div>
    
        <div className={styles.buttons}>
            <ImageFileInput/>
            <Button name="Delete" onClick={onSubmit}/>
        </div>
    </form>
    );
 };

export default CardAddForm;