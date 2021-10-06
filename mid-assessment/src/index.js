import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { NewsProvider } from './context/news.context';

ReactDOM.render(
  <React.StrictMode>
    <NewsProvider>
      <App />
    </NewsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);