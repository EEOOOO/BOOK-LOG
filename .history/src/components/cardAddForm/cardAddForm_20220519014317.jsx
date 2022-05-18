import React, { useRef , useState }  from 'react';
import Button from '../button/button';
import styles from './cardAddForm.module.css';

const CardAddForm = ({FileInput, onAdd}) => {
    const formRef = useRef();
    const titleRef = useRef();
    const authorRef = useRef();
    const publisherRef = useRef();
    const themeRef = useRef();
    const starRateRef = useRef();
    const beforeReadingRef = useRef();
    const afterReadingRef = useRef();
    const [file, setFile] = useState({fileName:null, fileUrl:null});

    const onFileChange = file => {
        setFile({
            fileName: file.name,
            fileUrl: file.url,
        })
    }
    const onSubmit = (event) => {
        event.preventDefault();
        const card = {
            id: Date.now(),
            bookTitle: titleRef.current.value || '',
            author: authorRef.current.value || '',
            publisher: publisherRef.current.value || '',
            theme: themeRef.current.value || '',
            starRate: starRateRef.current.value || '',
            beforeReading: beforeReadingRef.current.value || '',
            afterReading: afterReadingRef.current.value || '',
            fileName : fileName || '',
            fileUrl : fileUrl || '',
        };
        formRef.current.reset();
        onAdd(card);
    };
    return (
    <form ref ={formRef} className={styles.cardEdit}>
        <div className={styles.bookInfo}>
            <div className={styles.info}>
                <span className={styles.infoText}>Title</span>
                <input className={styles.infoInput} 
                ref = {titleRef}
                type="text" 
                name="bookTitle" 
                placeholder="bookTitle" />
            </div>
            <div className={styles.info}>
                <span className={styles.infoText}>Author</span>
                <input className={styles.infoInput} 
                ref = {authorRef}
                type="text" 
                name="author" 
                placeholder="author" />
            </div>
            <div className={styles.info}>
                <span className={styles.infoText}>Publisher</span>
                <input className={styles.infoInput} 
                ref = {publisherRef}
                type="text" 
                name="publisher" 
                placeholder="publisher" />
            </div>
        </div>
        <div className={styles.bookCardThemeAndRate}>
            <div className={styles.cardTheme}>
                <span className={styles.infoText}>Card Theme</span>
                <select 
                ref = {themeRef}
                name="theme" placeholder="theme" >
                    <option placeholder="light">light</option>
                    <option placeholder="dark">dark</option>
                    <option placeholder="pink">pink</option>
                </select>
            </div>
            <div className={styles.bookRate}>
                <span className={styles.infoText}>Star Rate</span>
                <select 
                ref = {starRateRef}
                name="starRate" placeholder="💙💙💙💙💙">
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
                <textarea 
                ref = {beforeReadingRef}
                type="text" 
                name="beforeReading" 
                placeholder="beforeReading" />
            </div>
            <div className={styles.beforeReading}>
                <span className={styles.infoText}>After reading</span>
                <textarea 
                ref = {afterReadingRef}
                type="text" 
                name="afterReading" 
                placeholder="afterReading" />
            </div>
        </div>
    
        <div className={styles.buttons}>
            <FileInput onFileChange={onFileChange}/>
            <Button name="Add" onClick={onSubmit}/>
        </div>
    </form>
    );
};

export default CardAddForm;