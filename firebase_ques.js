var firebaseConfig = {
  apiKey: "AIzaSyB59biox2636O9D6C5_28ikalpCNLSQM_0",
  authDomain: "image-and-pdf-1479a.firebaseapp.com",
  databaseURL: "https://image-and-pdf-1479a.firebaseio.com",
  projectId: "image-and-pdf-1479a",
  storageBucket: "image-and-pdf-1479a.appspot.com",
  messagingSenderId: "245554748712",
  appId: "1:245554748712:web:9e36a28fbf07372f87841d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//function to save file
var file_url;
var database = firebase.database();
var contact_details = database.ref().child("Client-Contact-Info");
const storage = firebase.storage();

contact_details.on("child_added", function(snapshot, prevChildKey) {
    var newPost = snapshot.val();
    var name = newPost.Name;
    var eid = newPost.Email;
    var message = newPost.Message;
    var phone = newPost.Phone;
    var fname = newPost.Filename; 
    //console.log(fname);
    storage.ref(fname).getDownloadURL()
    .then((url) => {
      //console.log(url);
      //console.log("insde");
      file_url = url;
   
    
    var table = document.getElementById("myTable");
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = name;
    cell2.innerHTML = eid;
    cell3.innerHTML = phone;
    cell4.innerHTML = message;
    cell5.innerHTML = file_url;
  });
    /*var ul = document.getElementById("dynamic-list");
    var li = document.createElement("li");
    li.setAttribute('id', el);
    li.appendChild(document.createTextNode(el));
    ul.appendChild(li);*/
  });

function clear(){
    var db = database.ref();
    ref.child("/Client-Contact-Info").remove();
}