import React from 'react';
import styles from './editor.module.css';
import CardEditForm from '../cardEditForm/cardEditForm';
import CardAddForm from '../cardAddForm/cardAddForm';
const Editor = ({FileInput, cards, addCard, updateCard, deleteCard}) => (
            <div className={styles.editor}>
                <div className={styles.editorTitle}>Editor</div>
                {Object.keys(cards).map(key => 
                    <CardEditForm 
                    FileInput={FileInput}
                    key={key} 
                    card={cards[key]} 
                    updateCard={updateCard} 
                    deleteCard={deleteCard}
                    />)
                }
                <CardAddForm FileInput={FileInput} onAdd={addCard}/>
            </div>
    );

export default Editor;