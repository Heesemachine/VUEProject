import { createStore } from 'vuex'
import reactions from './reactions'

const store = createStore ({
  modules: { reactions }

}

)


export default store

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDW4lBrTtAJghOJ79shDO_2MZUcKmtITRE",
//   authDomain: "moviefilm-da607.firebaseapp.com",
//   projectId: "moviefilm-da607",
//   storageBucket: "moviefilm-da607.appspot.com",
//   messagingSenderId: "1009235657701",
//   appId: "1:1009235657701:web:28683e7b4ceab7e710250c",
//   measurementId: "G-MEY05YGF44"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);