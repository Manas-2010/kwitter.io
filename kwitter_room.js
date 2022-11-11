
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-LzKa7JOpwnwluslmrGVTJcpuB3PHuoc",
  authDomain: "kitter-4ca84.firebaseapp.com",
  projectId: "kitter-4ca84",
  storageBucket: "kitter-4ca84.appspot.com",
  messagingSenderId: "474444246093",
  appId: "1:474444246093:web:c45e023e9055fce3e3c004",
  measurementId: "G-5RYD196HCG"
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
