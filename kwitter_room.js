var firebaseConfig = {
    apiKey: "AIzaSyB-OT2bBCKXcsSTeJUKPlKe8RBtwrjlXx8",
    authDomain: "letscahtwedapp.firebaseapp.com",
    databaseURL: "https://letscahtwedapp-default-rtdb.firebaseio.com",
    projectId: "letscahtwedapp",
    storageBucket: "letscahtwedapp.appspot.com",
    messagingSenderId: "787020137207",
    appId: "1:787020137207:web:104dc8c0c68481f29789f2"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addroom(){
    room_name=document.getElementById("add_room").value;
    firebase.database().ref("/").child(room_name).update({
     purpose:"room_name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
  }
  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code

row="<div class='room_name' id="+Room_names+" onclick=redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";

//End code
});});}
getData();  

function redirectToRoomName(){
  localStorage("room_name",name);
  window.location="kwitter_page.html";

}