var myProfileImage=document.getElementById("myProfileImage");

var requestProfileImage=new XMLHttpRequest();
requestProfileImage.open('GET', '../function/myProfileImage.php');
requestProfileImage.send();

requestProfileImage.onload = () => {
    let response=JSON.parse(requestProfileImage.responseText);
    myProfileImage.src=response['url'];
}