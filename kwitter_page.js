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
    room_name = localStorage.getItem("room_name");

    function send(){
          msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:username,
      message:msg,
      like:0
});
document.getElementById("msg").value = "";
    }

function getData() {firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data["name"];
message = message_data["message"];
like = message_data["like"];
name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>"+ message+"</h4>";
like_btn = "<button class='btn btn-warning' id="+ firebase_message_id +"value = "+ like+"onclick = update_like(this.id)>";
spanWithTag = "<span class='glyphicon glyphicon-thumbs-up'>like:" + like +"</span></button><hr>";
row = name_with_tag + message_with_tag + like_btn + spanWithTag;
document.getElementById("output").innerHTML += row;
      } });  }); }
getData();

function update_like(message_id){
      console.log("clicked on like btn" + message_id);
      btnId = message_id;
      likes = document.getElementById(btnId).value;
      updatedLikes = likes + 1;
      console.log(updatedLikes);
      firebase.database().ref(room_name).child(message_id).update({
            like: updatedLikes
      });
      like = updatedLikes
}

function log_out(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
