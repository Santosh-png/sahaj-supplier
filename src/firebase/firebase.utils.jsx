import firebase from 'firebase';

const config ={
    apiKey: "AIzaSyCzpIyf7yDEapAqVqLdtipnwBLDV0IdoPk",
    authDomain: "sahaj-supplier.firebaseapp.com",
    databaseURL: "https://sahaj-supplier.firebaseio.com",
    projectId: "sahaj-supplier",
    storageBucket: "sahaj-supplier.appspot.com",
    messagingSenderId: "243982935756",
    appId: "1:243982935756:web:c4cf44019fd17b7ab28469",
    measurementId: "G-V6W9FLCW30"
}
firebase.initializeApp(config);

export default firebase;