import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyA1Jjr1i4JXtew-Hoakg1Y0q_wYUJ4fImg",
    authDomain: "fir-react-starter-32daf.firebaseapp.com",
    databaseURL: "https://fir-react-starter-32daf.firebaseio.com",
    projectId: "fir-react-starter-32daf",
    storageBucket: "",
    messagingSenderId: "862609274252"
  };
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
