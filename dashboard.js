window.onload = function() {
    var status = window.localStorage.getItem("login");
    if(status == false){
        window.location.href = "sign_log.html";
    }
    else{
        var name = window.localStorage.getItem("Name");
        console.log(name);
        document.getElementById("name").innerHTML = name;
        var id = window.localStorage.getItem("id");
        document.getElementById("cusid").innerHTML = id;
        console.log(id);
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
          var file_url;
            var database = firebase.database();

            const storage = firebase.storage();
            //console.log(storage.ref(id));
            var storageRef = storage.ref(id);


            // Now we get the references of these images
            storageRef.listAll().then(function(result) {
              result.items.forEach(function(imageRef) {
                // And finally display them
                displayImage(imageRef);
              });
            }).catch(function(error) {
              // Handle any errors
            });
        
            function displayImage(imageRef) {
              imageRef.getDownloadURL().then(function(url) {
                // TODO: Display the image on the UI
                console.log(url);
                var img = new Image(); 
                img.src =  url; 
                document.getElementById('body').appendChild(img); 
              }).catch(function(error) {
                // Handle any errors
              });
            }




        }
    
}
