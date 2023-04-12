var i=document.getElementsByClassName("fa-heart");

i.addEventListener('click',function(){

    if(i.getAttribute("class","fa-regular")){
        i.style.display="fa-solid";
    }
    if(btn.getAttribute("class","fa-solid")){
        i.style.display="fa-regular";
    }
    
});