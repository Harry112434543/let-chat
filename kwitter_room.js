
var firebaseConfig = {
   apiKey: "AIzaSyAZmfHaXV_OXUsMvyUIk6OX9JV1YyBUqtw",
   authDomain: "kwitter-df72f.firebaseapp.com",
   databaseURL: "https://kwitter-df72f-default-rtdb.firebaseio.com",
   projectId: "kwitter-df72f",
   storageBucket: "kwitter-df72f.appspot.com",
   messagingSenderId: "866088128373",
   appId: "1:866088128373:web:0757520528b34a53e64d3c"
 };
 
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);





user_name= localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();



function addRoom()
{

      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"

      });

      localStorage.setItem("room_name" , room_name);

      window.location="msg.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "msg.html";
}

function logout()

{

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "mainpage.html";
}
