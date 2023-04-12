var username=document.getElementById("username");

var lastClicked=sessionStorage.getItem("lastClicked");
var userValue=sessionStorage.getItem(lastClicked);
username.innerHTML=userValue;