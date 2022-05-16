import React from 'react';
import styles from './preview.module.css';
import Card from '../card/card';
const Preview = ({cards}) => (
            <div className={styles.preview}>
                <h1 className={styles.previewTitle}>Preview</h1>
                <div className={styles.borderBottom}></div>
                {cards.map(card => 
                    <Card card={card}/>
                )}
            </div>
    );

export default Preview;