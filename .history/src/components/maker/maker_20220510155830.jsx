import styles from './maker.module.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

const Maker = (props) => {
    const location = useLocation();
    return <h1>{location.state}</h1>
}

export default Maker;