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
    const [cards, setCards] = useState({});

    const navigate = useNavigate()
    const onLogout = () => {
        authService.logout();
    }
    useEffect(()=>{
        if(!userId){
            return
        }
        const stopSync = cardRepository.syncCards(userId, cards=>{
            setCards(cards)
        });
        return () => stopSync();
    },[userId]);
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