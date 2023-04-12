var pfpImage=document.getElementById("pfpImage");
var profileUser=document.getElementById("username"); //Prendo l'username dell'account che sto visitando
var nameSurname=document.getElementById("name-surname");
var post=document.getElementById("post");
var follower=document.getElementById("follower");
var following=document.getElementById("following");
var biography=document.getElementById("bio");

var requestStats=new XMLHttpRequest();
requestStats.open('POST', '../function/checkStats.php');
requestStats.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
var profileUsername=profileUser.textContent;
requestStats.send("username="+profileUsername);

requestStats.onload = () => {
    let response=JSON.parse(requestStats.responseText);
    pfpImage.src=response['imageURL'];
    if(response['firstName'] != null || response['lastName'] != null){
        let firstLastName=response['firstName']+" "+response['lastName'];
        nameSurname.innerHTML=firstLastName;
    }
    
    post.innerHTML="Post <br>"+response['post'];
    follower.innerHTML="Seguaci <br>"+response['follower'];
    following.innerHTML="Seguiti <br>"+response['following'];
    biography.innerHTML=response['bio'];
}