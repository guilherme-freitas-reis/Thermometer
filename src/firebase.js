import firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDSDQx8ohmqQSsYyG6DyyixzOmYyMhV4O0",
  authDomain: "temperature-iot-pitagoras.firebaseapp.com",
  databaseURL: "https://temperature-iot-pitagoras.firebaseio.com",
  projectId: "temperature-iot-pitagoras",
  storageBucket: "temperature-iot-pitagoras.appspot.com",
  messagingSenderId: "653203883073",
  appId: "1:653203883073:web:4634b3a608255241a0f2c0",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
