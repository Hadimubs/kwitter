var firebaseConfig = {
      apiKey: "AIzaSyCGBl-5vw_dU6i9A8__tV7X6SiN4cOQxFQ",
      authDomain: "kwitter-35ad3.firebaseapp.com",
      databaseURL:"https://kwitter-35ad3-default-rtdb.firebaseio.com",
      projectId: "kwitter-35ad3",
      storageBucket: "kwitter-35ad3.appspot.com",
      messagingSenderId: "824362875297",
      appId: "1:824362875297:web:d725ee887a4d3632b673e0",
      measurementId: "G-HC3G56XSBH"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
v=localStorage.getItem("username");
document.getElementById("we").innerHTML="Welcome "+v+"!";

function add(){
room=document.getElementById("r").value;

firebase.database().ref("/").child(room).update({
purpose:"adding room name"
});
localStorage.setItem("room_name",room);
window.location="kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML+=row; 
      //End code
      });});}
getData();
function redirectToRoomName(rrm){
console.log(rrm);
localStorage.setItem("room_name",rrm);
window.location="kwitter_page.html";
}
function log(){
localStorage.removeItem("username");
localStorage.removeItem("room_name");
window.location="index.html";
}