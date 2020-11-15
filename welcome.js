//Is the user authenticated?
if (sessionStorage.getItem('AuthenticationState') === null) {
    alert("Not logged in");
    window.open("login.html", "_self");
 }
 //Is their authentication token still valid?
 else if (Date.now > new Date(sessionStorage.getItem('AuthenticationExpires'))) {
    alert("Not logged in");   
    window.open("login.html", "_self");
 }
 else {
   console.log("all fine");
 }