import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';
import * as firebase from 'firebase';

const FIREBASE_OPTIONS = {
apikey:process.env.REACT_APP_FIREBASE_API_KEY,
authDomain:process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
databaseURL:process.env.REACT_APP_FIREBASE_DATABASEURL,
}

firebase.initializeApp(FIREBASE_OPTIONS);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
