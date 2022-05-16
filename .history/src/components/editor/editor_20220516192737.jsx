import React from 'react';
import styles from './editor.module.css';
import CardEditForm from '../cardEditForm/cardEditForm';
import CardAddForm from '../cardAddForm/cardAddForm';
const Editor = ({cards}) => (
            <div className={styles.editor}>
                <div className={styles.editorTitle}>Editor</div>
                {cards.map(card => <CardEditForm card={card}/>)}
                <CardAddForm/>
            </div>
    );

export default Editor;