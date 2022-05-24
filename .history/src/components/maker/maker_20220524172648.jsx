import styles from './maker.module.css';
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({FileInput, authService, cardRepository}) => {
    const locationState = useLocation();
    const [userId, setUserId] = useState(locationState && locationState.id);
    const [cards, setCards] = useState({
        '1':{
            id : '1',
            bookTitle: 'Sapiens',
            author: 'Yubal Hariri',
            publisher: 'kimyoungsa',
            theme: 'light',
            beforeReading: 'It would be fun',
            afterReading: 'It was so much good to read this',
            starRate:'💙💙💙💙🤍',
            fileName:'sapiens',
            fileUrl:null,
        },
        '2':{
            id : '2',
            bookTitle: 'Loonshot',
            author: 'Saphi Bakal',
            publisher: 'HereumCHulPan',
            theme: 'dark',
            beforeReading: 'It would be useful',
            afterReading: 'Nice book to understand the world but it was a bit bored',
            starRate:'💙💙🤍🤍🤍',
            fileName:'loonshot',
            fileUrl:'/images/loonshot.png',
        },
        '3':{
            id : '3',
            bookTitle: '데이터 리터러시',
            author: '강양석',
            publisher: '이큰',
            theme: 'pink',
            beforeReading: 'I hope to get a lot of information about Data from this bookTitle',
            afterReading: 'Very good to know all about the Data things',
            starRate:'💙💙💙💙💙',
            fileName:'dataliteracy',
            fileUrl:'/images/dataliteracy.png',
        }
    });

    const navigate = useNavigate()
    const onLogout = () => {
        authService.logout();
    }
    useEffect(()=>{
        if(!userId){
            return
        }
        cardRepository.syncCards(userId,card=>{
            setCards(card)
        })
    })
    useEffect(()=>{
        authService.onAuthChange(user => {
            if(user) {
                setUserId(user.uid);
            }
            else{
                navigate('/');
            }
        })
    })
    const createAndUpdateCard = (card) => {
        setCards(cards => {
            const newCards = {...cards};
            newCards[card.id] = card;
            return newCards;
        })
        cardRepository.saveCard(userId, card);
    }
    const deleteCard = (card) => {
        setCards(cards => {
            const newCards = {...cards};
            delete newCards[card.id];
            return newCards;
        })
        cardRepository.deleteCard(userId, card);
    }
    return <div className ={styles.maker}>
        <Header onLogout={onLogout}/>
        <div className={styles.content}>
            <Editor 
            FileInput={FileInput}
            cards={cards} 
            addCard={createAndUpdateCard}
            updateCard={createAndUpdateCard}
            deleteCard={deleteCard}
            />
            <Preview cards={cards}/>
        </div>
        <Footer />
        </div>
}

export default Maker;