import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyDiyXCTfuXsutySmaWQsC7srL7f4dMkSng",
    authDomain: "hastkala-heaven.firebaseapp.com",
    projectId: "hastkala-heaven",
    storageBucket: "hastkala-heaven.appspot.com",
    messagingSenderId: "633591494726",
    appId: "1:633591494726:web:b23080d1753bd55d253247",
    measurementId: "G-274GCXEEG9",
    databaseURL:"https://hastkala-heaven-default-rtdb.firebaseio.com/"

  };
export const app=initializeApp(firebaseConfig);
