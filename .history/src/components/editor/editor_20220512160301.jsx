import React from 'react';
import styles from './editor.module.css';
import CardEditForm from '../cardEditForm/cardEditForm';
const Editor = ({cards}) => (
            <div className={styles.editor}>
                <h1 className={styles.editorTitle}>Editor</h1>
                {cards.map(card => <CardEditForm card={card}/>)}
            </div>
    );

export default Editor;