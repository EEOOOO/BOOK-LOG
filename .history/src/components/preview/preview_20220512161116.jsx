import React from 'react';
import styles from './preview.module.css';
import Card from '../card/card';
const Preview = ({cards}) => (
            <div className={styles.preview}>
                <div className={styles.previewTitle}>Preview</div>
                {cards.map(card => 
                    <Card card={card}/>
                )}
            </div>
    );

export default Preview;