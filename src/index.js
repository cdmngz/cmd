import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCZzoknHWxfzgjAVsIWudiAYc-86SU3doI",
  authDomain: "comandosdev.firebaseapp.com",
  databaseURL: "https://comandosdev.firebaseio.com",
  projectId: "comandosdev",
  storageBucket: "comandosdev.appspot.com",
  messagingSenderId: "319743340755",
  appId: "1:319743340755:web:403ed17e5a9774e8662426",
  measurementId: "G-H32J5TZSDT"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  );

export const db = firebase.firestore();