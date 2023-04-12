var txtFirstName=document.getElementById("firstName");
var txtLastName=document.getElementById("LastName");
var BiotxtArea=document.getElementById("bio");
var sexRadio=document.getElementById("gender");
var autoBirthDate=document.getElementById("birth-date");
var autoPfp=document.getElementById("pfp-image");
var autoBtnModProfile=document.getElementById("btnModProfile");

autoBtnModProfile.addEventListener('click', function() {

    var requestAutoEdit=new XMLHttpRequest();
    requestAutoEdit.open('GET', '../function/autoEditProfile.php');
    requestAutoEdit.send();

    requestAutoEdit.onload = () => {
        var response=JSON.parse(requestAutoEdit.responseText);

        txtFirstName.value=response['firstName'];
        txtLastName.value=response['LastName'];
        BiotxtArea.value=response['bio'];
        sexRadio.value=response['sex'];
        autoBirthDate.value=response['birthDate'];
        autoPfp.value=response['pfp'];
    }
});
