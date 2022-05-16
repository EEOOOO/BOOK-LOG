import styles from './maker.module.css';
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({authService}) => {
    const [cards, setCards] = useState([
        {
            id : '1',
            book: 'Sapiens',
            author: 'Yubal Hariri',
            publisher: 'kimyoungsa',
            theme: 'light',
            beforeReading: 'It would be fun',
            afterReading: 'It was so much good to read this',
            starRate:'💙💙💙💙🤍',
            fileName:'sapiens',
            fileUrl:'sapience.png',
        },
        {
            id : '2',
            book: 'Loonshot',
            author: 'Saphi Bakal',
            publisher: 'HereumCHulPan',
            theme: 'Dark',
            beforeReading: 'It would be useful',
            afterReading: 'Nice book to understand the world but it was a bit bored',
            starRate:'💙💙🤍🤍🤍',
            fileName:'loonshot',
            fileUrl:'loonshot.png',
        },
        {
            id : '3',
            book: '데이터 리터러시',
            author: '강양석',
            publisher: '이큰',
            theme: 'colorful',
            beforeReading: 'I hope to get a lot of information about Data from this book',
            afterReading: 'Very good to know all about the Data things',
            starRate:'💙💙💙💙💙',
            fileName:'sapiens',
            fileUrl:'sapience.png',
        }
    ]);

    const navigate = useNavigate()
    const onLogout = () => {
        authService.logout();
    }
    
    useEffect(()=>{
        authService.onAuthChange(user => {
            if(!user) {
                navigate('/');
            }
        })
    })
    const location = useLocation();
    return <div className ={styles.maker}>
        <Header onLogout={onLogout}/>
        <div className={styles.content}>
            <Editor />
            <Preview />
        </div>
        <Footer />
        </div>
}

export default Maker;