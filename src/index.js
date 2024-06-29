import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css"
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-is/18.3.1/cjs/react-is.production.min.js" integrity="sha512-7tmQCIngBCyNlDtDg31ZalbtoWQbMtqK+8Yo2Vgk6DFbC4YTFfqmLzuSwYWqMnmpmuwZBMlp/POm8ES1PHUwcg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
