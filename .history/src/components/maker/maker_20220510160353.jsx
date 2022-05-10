import styles from './maker.module.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

const Maker = (props) => {
    const location = useLocation();
    return <div>
            <h1>Hello </h1>
            <h2>User Code - {location.state.id}</h2>
        </div>
}

export default Maker;