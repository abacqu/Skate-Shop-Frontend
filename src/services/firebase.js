import firebase from "firebase/app";
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyAbQZ1MIqPNvzo0Q9uh5aj3AVpBGAxWBfg',
    authDomain: 'react-skate.firebaseapp.com',
    projectId: 'react-skate',
    storageBucket: 'react-skate.appspot.com',
    messagingSenderId: '468637843113',
    appId: '1:468637843113:web:cd1c8052632cfcbfc973b8'
  };

  firebase.initializeApp(config);

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  function login() {
    return auth.signInWithPopup(provider);
  }

  function logout() {
    return auth.signOut();
  }

  export { auth, login, logout };

  // if(!props.user) return; 

//   {props.user &&
//  Short circuit any function depeneding on auth
// }

// Min 16 for if else to display data with auth