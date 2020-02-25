import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBWv47mkaHocfpz6H8uGk9l1Dxej4CMbog",
    authDomain: "authentic-f6229.firebaseapp.com",
    databaseURL: "https://authentic-f6229.firebaseio.com",
    projectId: "authentic-f6229",
    storageBucket: "authentic-f6229.appspot.com",
    messagingSenderId: "296367009935",
    appId: "1:296367009935:web:95726677f774ef44aa40fa"
};
const fire = firebase.initializeApp(firebaseConfig);
export default fire;