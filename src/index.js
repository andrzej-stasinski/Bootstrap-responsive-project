import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDcCDZeX6B5nHgwGIEQynh1jI9Acz9HkUw",
  authDomain: "infoshare-a85a4.firebaseapp.com",
  databaseURL: "https://infoshare-a85a4.firebaseio.com",
  projectId: "infoshare-a85a4",
  storageBucket: "infoshare-a85a4.appspot.com",
  messagingSenderId: "24435093227",
  appId: "1:24435093227:web:ebeb654120664ee0f6d8ae"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // <div>
  //   <App />
  // </div>,
  document.getElementById('root')
);

