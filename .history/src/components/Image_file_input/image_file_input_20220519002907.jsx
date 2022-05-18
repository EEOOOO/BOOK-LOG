import React, { useRef } from 'react';
import styles from './image_file_input.module.css';
const ImageFileInput = ({imageUploader, name, onFileChange}) => {
    const inputRef = useRef();
    const onButtonClick = event => {

    }
    return (
    <div className={styles.container}>
        <input
        ref = {inputRef}
        className={styles.input}
        type='file'
        accept='image/*'
        name='file'
        />
        <button className={styles.imageButton} onClick={onButtonClick}>{name||'no file'}</button>
    </div>
    );
};

export default ImageFileInput;