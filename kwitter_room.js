
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGEwN9nwlme6gnuNcQure-h0H5b45IcwA",
  authDomain: "kwitter-7c27a.firebaseapp.com",
  databaseURL: "https://kwitter-7c27a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kwitter-7c27a",
  storageBucket: "kwitter-7c27a.appspot.com",
  messagingSenderId: "344272841830",
  appId: "1:344272841830:web:53df82ec5fa7b8b7ca11a7"
};

// Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    username = localStorage.getItem("username");
    document.getElementById("username").innerHTML = "Wellcome "+ username+"!";
    function addRoom(){
   room_name = document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
         purpose:"adding room name"
   });
   localStorage.setItem("room_name", room_name);
   window.location = "kwitter_page.html";
    }

function getData(){
      firebase.database().ref("/").on('value', function(snapshot) 
      {document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) 
      {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("RoomName = "+Room_names);
      row = "<div class='room_name' id="+room_name+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function log_out(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
