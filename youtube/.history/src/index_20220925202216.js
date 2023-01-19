import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app.jsx';
import Youtube from './service/youtube';

const youtube = new Youtube('AIzaSyBbOFJZ0wPaBnrt1n8uKB0kNdtN1EZ1KJ4AIzaSyBbOFJZ0wPaBnrt1n8uKB0kNdtN1EZ1KJ4');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App youtube={youtube}/>
  </React.StrictMode>
);