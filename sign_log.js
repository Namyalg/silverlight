function getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}

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
function signup() {
    var name = document.getElementById("si-name").value;
    var eid = document.getElementById("si-email").value;
    var key = getRandomString(10);
    //var msg = document.getElementById("client-msg").value;
    alert(key);
    document.getElementById("si-email").value = "";
    document.getElementById("si-name").value = "";
    //alert("Your information has been recorded!");
    console.log("goign to try now");
    console.log(key);
        var details = {
            Name : name,
            Email : eid,
        }
        contact_details.child(key).set(details); 
        //contact_details.push(details);
    alert("Your details have been recorded!");
};
window.sessionStorage.setItem("login", false);
function login(){
    var name = document.getElementById("lo-name").value;
    window.localStorage.setItem("Name", name);
    var id = document.getElementById("lo-id").value;
    window.localStorage.setItem("id", id);
    window.sessionStorage.setItem("login", true);
    window.location.href = "dashboard.html";
}