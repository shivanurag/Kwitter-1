const firebaseConfig = {
  apiKey: "AIzaSyAyNT4QeQPyak_gA8LSfRE-uhO-DpuvX6g",
  authDomain: "kwitter-c561a.firebaseapp.com",
  databaseURL: "https://kwitter-c561a-default-rtdb.firebaseio.com",
  projectId: "kwitter-c561a",
  storageBucket: "kwitter-c561a.appspot.com",
  messagingSenderId: "593368902156",
  appId: "1:593368902156:web:13fff5fa50d70d55c7dc29"
};

firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name")
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;

    Room_names = childKey;
   

   
   });});}
getData();