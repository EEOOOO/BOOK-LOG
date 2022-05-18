import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import AuthService from './services/auth_service';
import firebaseApp from './services/firebase';
import {BrowserRouter} from 'react-router-dom';
import ImageUploader from './services/image_uploader';
import ImageFileInput from './components/Image_file_input/image_file_input';

const authService = new AuthService(firebaseApp);
const imageUploader = new ImageUploader();
const FileInput = props => (<ImageFileInput {...props} imageUploader={imageUploader}/>);
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
     <App authService={authService} FileInput={FileInput}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
