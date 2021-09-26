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


    user_name=localStorage.getItem("user_name"); 
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"; 
    function addRoom() { room_name = document.getElementById("room_name").value; 
    firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" }); 
    localStorage.setItem("room_name", room_name); 
    window.location = "kwitter_page.html"; }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names); 
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row; }); });
       }
 
getData();
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}
function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}