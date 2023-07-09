//YOUR FIREBASE LINKS
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
      
 un=localStorage.getItem("username");
 um=localStorage.getItem("room_name");
 function Send(){
  inp=document.getElementById("q").value;
  firebase.database().ref(um).push({
   name1:un,
   message:inp,
   like:0

  });
document.getElementById("q").value="";
 }
function getData() { firebase.database().ref("/"+um).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
nm=message_data['name1'];
msg=message_data['message'];
lk=message_data['like'];
nm_tag="<h4>"+nm+"<img class='user_tick' src='tick.png'></h4>";
msg_tag="<h4 class='message_h4'>"+msg+"</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+lk+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ lk +"</span></button><hr>";
child=nm_tag+msg_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=child;
//End code
      } });  }); }
getData();

function updateLike(vl){
console.log(vl);
btn_id=vl;
likes=document.getElementById(btn_id).value;
update=Number(likes)+1;
firebase.database().ref(um).child(vl).update({
like:update
});
}
function out(){
localStorage.removeItem("username");
localStorage.removeItem("room_name");
window.location.replace("index.html");
}