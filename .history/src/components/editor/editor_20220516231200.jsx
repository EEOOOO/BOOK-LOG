import React from 'react';
import styles from './editor.module.css';
import CardEditForm from '../cardEditForm/cardEditForm';
import CardAddForm from '../cardAddForm/cardAddForm';
const Editor = ({cards, onAdd}) => (
            <div className={styles.editor}>
                <div className={styles.editorTitle}>Editor</div>
                {cards.map(card => <CardEditForm key={card.id} card={card}/>)}
                <CardAddForm onAdd={onAdd}/>
            </div>
    );

export default Editor;