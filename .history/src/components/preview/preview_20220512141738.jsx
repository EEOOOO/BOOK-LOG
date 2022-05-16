import React from 'react';
import styles from './preview.module.css';
import Card from '../card/card';
const Preview = ({cards}) => (
            <div className={styles.preview}>
                <h1>Preview</h1>
                {cards.map(card => <Card card={card}/>)}
            </div>
    );

export default Preview;