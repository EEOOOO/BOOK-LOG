import React from 'react';
import styles from './editor.module.css';
import CardEditForm from '../cardEditForm/cardEditForm';
const Editor = ({cards}) => (
            <div className={styles.editor}>
                <p className={styles.editorTitle}>Editor</p>
                {cards.map(card => <CardEditForm card={card}/>)}
            </div>
    );

export default Editor;