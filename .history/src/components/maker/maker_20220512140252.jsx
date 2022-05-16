import styles from './maker.module.css';
import React, {useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import { useState } from 'react/cjs/react.production.min';

const Maker = ({authService}) => {
    consr [cards, setCards] = useState();
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