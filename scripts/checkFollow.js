/**
 * Richiesta per vedere se seguo già la persona in questione
 */

const followed="Account already followed";
const notFollowed="Account not followed";

var btnDiv=document.getElementById("btnDiv");
var username=document.getElementById("username");   //Prendo l'h1 contenente l'username della persona che voglio seguire
var btn=document.createElement("button");   //Creazione bottone segui
btn.type="button";
btn.classList.add("btn");
btn.classList.add("rounded-pill");
btn.classList.add("position-relative");
btn.classList.add("top-50");
btn.classList.add("translate-middle-y");
btn.setAttribute("id","btnFollow");
btnDiv.appendChild(btn);

var request=new XMLHttpRequest();
request.open('POST', '../function/alreadyFollow.php');
request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
var toFollow=username.textContent;    //Metto l'username della persona da seguire nella variabile @toFollow
request.send("toFollow="+toFollow);

request.onload = () => {    
    let response=request.responseText;
    if (response.localeCompare(followed)==0) {   //Se la seguo
        btn.innerHTML="Seguito";
        btn.classList.add("btn-outline-primary");
    } else { //Se non la seguo
        btn.innerHTML="Segui";
        btn.classList.add("btn-primary");
    }
}