import React from 'react';
import styles from './editor.module.css';
const Editor = ({cards}) => (
            <div className={styles.editor}>
                <h1>Editor</h1>
                cards.map(card => <Card card={card}/>)
            </div>
    );

export default Editor;