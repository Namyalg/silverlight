  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAt_TUziLwrbKHRcadFuX22qaBVTDA4SO0",
    authDomain: "silverlight-d86a1.firebaseapp.com",
    databaseURL: "https://silverlight-d86a1.firebaseio.com",
    projectId: "silverlight-d86a1",
    storageBucket: "silverlight-d86a1.appspot.com",
    messagingSenderId: "397886885407",
    appId: "1:397886885407:web:cab212f74c97d4aff70f2a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//function to save file

var database = firebase.database();
var contact_details = database.ref().child("Client-Contact-Info");
var file_url;
var file_name;
const storage = firebase.storage();
function uploadFile(){ 
  // Created a Storage Reference with root dir
  var storageRef = firebase.storage().ref();
  // Get the file from DOM
  var name = document.getElementById("client-name").value;
  var file = document.getElementById("files").files[0];
  console.log(file);
  
  //dynamically set reference to the file name
  var path = name;
  var thisRef = storageRef.child(path).child(file.name);
  file_name = file.name;
  //put request upload file to firebase storage
  thisRef.put(file).then(function(snapshot) {
     alert("File Uploaded")
     console.log('Uploaded a blob or file!');
  });
  
  document.getElementById("client-name").value = "";
  document.getElementById("files").value = "";
}
/*function store_data() {
    var name = document.getElementById("client-name").value;
 
    document.getElementById("client-name").value = "";

    document.getElementById("files").value = "";
    //alert("Your information has been recorded!");
    console.log("goign to try now");
        var details = {
            Name : name,
            Filename : file_name,
        }
        contact_details.push(details);
    alert("Your details have been recorded!");
};

*/