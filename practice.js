var firebaseConfig = {
    apiKey: "AIzaSyAtXrs5_Yp6FS6lGHliY26zbavk-RwQZ-A",
    authDomain: "kwitter-app-8047c.firebaseapp.com",
    databaseURL: "https://kwitter-app-8047c-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-8047c",
    storageBucket: "kwitter-app-8047c.appspot.com",
    messagingSenderId: "637930677152",
    appId: "1:637930677152:web:62c4abf4d6c2ce116cfac5",
    measurementId: "G-Z7ST5MPK4X"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({ purpose : "adding user" });
  }