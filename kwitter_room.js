const firebaseConfig = {
  apiKey: "AIzaSyCrHwUZHiBeHuOXY2H2lUfj5uqjbYm2ftQ",
  authDomain: "projectkwitter-e35be.firebaseapp.com",
  databaseURL: "https://projectkwitter-e35be-default-rtdb.firebaseio.com",
  projectId: "projectkwitter-e35be",
  storageBucket: "projectkwitter-e35be.appspot.com",
  messagingSenderId: "8074640403",
  appId: "1:8074640403:web:e43a3fdc08b7b1f86113e6",
  measurementId: "G-J2BQJ75L2V"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function logout() {
    window.location = "index.html";
}