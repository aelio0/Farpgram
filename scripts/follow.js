var username=document.getElementById("username");   //Prendo l'h1 contenente l'username della persona che voglio seguire
var btnFollow=document.getElementById("btnFollow");

/**
 * EventListener per la funzione follow al click del bottone
 */
btnFollow.addEventListener('click', function() {
    
    var request=new XMLHttpRequest();
    request.open('POST', '../function/follow.php');
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var toFollow=username.textContent;    //Metto l'username della persona da seguire nella variabile @toFollow
    request.send("toFollow="+toFollow);

    if(btnFollow.textContent=="Segui") {
        request.onload = () => {
            btnFollow.innerHTML="Seguito";
            btnFollow.classList.remove("btn-primary");
            btnFollow.classList.add("btn-outline-primary");
        }
    } else {
        request.onload = () => {
            btnFollow.innerHTML="Segui";
            btnFollow.classList.remove("btn-outline-primary");
            btnFollow.classList.add("btn-primary");
        }
    }
})