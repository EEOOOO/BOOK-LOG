import React from 'react';
import styles from './preview.module.css';
import Card from '../card/card';
const Preview = ({cards}) => (
            <div className={styles.preview}>
                <div className={styles.previewTitle}>Preview</div>
                {Object.keys(cards).map(key => 
                    <Card key={key} card={cards[key]}/>
                )}
            </div>
    );

export default Preview;