var imgURL=document.getElementById("img"); 
var pfpPost=document.getElementById("pfpPost"); 
var userURL=document.getElementById("user");
var bodyURL=document.getElementById("descrizione");
var postLocation=document.getElementById("location");
var actionTime=document.getElementById("ts");

var lastURLClicked=sessionStorage.getItem("lastURLClicked");
var valueURL=sessionStorage.getItem(lastURLClicked);

imgURL.src=valueURL;
let pos=valueURL.search("/uploads/");
let tmp=valueURL.substring(pos);
console.log(tmp);
tmp=".."+tmp;

var requestURL=new XMLHttpRequest();
requestURL.open('POST', '../function/getURL.php');
requestURL.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
requestURL.send("url="+tmp);

requestURL.onload = () => {
    let response=JSON.parse(requestURL.responseText);

    pfpPost.src=response['pfpImage'];
    
    userURL.innerHTML=response['username'];

    console.log(response);
    bodyURL.innerHTML=response['body'];

    postLocation.innerHTML=response['location'];

    actionTime.innerHTML=response['actionTime'];
}