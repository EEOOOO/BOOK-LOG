import styles from './maker.module.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

const Maker = (props) => {
    const location = useLocation();
    return <div>
            <h1>Hello User Code - {location.state.id}</h1>
        </div>
}

export default Maker;