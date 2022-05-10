import styles from './maker.module.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

const Maker = (props) => {
    const location = useLocation();
    console.log(location.state.id);
}

export default Maker;