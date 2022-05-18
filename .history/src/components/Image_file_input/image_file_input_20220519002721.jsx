import React from 'react';
import styles from './image_file_input.module.css';
const ImageFileInput = ({imageUploader, name, onFileChange}) => {
    return (
    <div className={styles.container}>
        <input
        className={styles.input}
        type='file'
        accept='image/*'
        name='file'
        />
        <button className={styles.imageButton}>{name||'no file'}</button>
    </div>
    );
};

export default ImageFileInput;