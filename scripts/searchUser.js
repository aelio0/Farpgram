var div=document.getElementById("oc-body");
var txt=document.getElementById("txtSearch");
var ul=document.createElement("ul");
ul.classList.add("list-group");
ul.classList.add("list-group-flush");
div.appendChild(ul);

txt.addEventListener("input", function() {

    var request=new XMLHttpRequest();
    request.open('POST', '../function/searchUser.php');
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var value=txt.value;
    request.send("txtSearch="+value);
    
    request.onload = () => {    //<li class="list-group-item text-bg-dark"><img src="Images\colorful.PNG" class="rounded-circle" style="max-width: 2rem"><a href="profile.php" class="accountToSearch link">Mattia</a></li>

        var response=JSON.parse(request.responseText);

        ul.replaceChildren();
        response.forEach(element => {
            var li=document.createElement("li");
            li.classList.add("list-group-item");
            li.classList.add("text-bg-dark");
            ul.appendChild(li);     

            var img=document.createElement("img");
            img.src=element["imageURL"];
            img.classList.add("rounded-circle");
            img.classList.add("profile-image");
            li.appendChild(img);

            var a=document.createElement("a");
            a.href="../public/profile.php";
            a.classList.add("accountToSearch");
            a.classList.add("link");
            a.innerHTML=element["username"];
            li.appendChild(a);
            a.addEventListener('click', function() {
                sessionStorage.setItem("accountToSearch", element["username"]);
                var key="accountToSearch";
                sessionStorage.setItem("lastClicked", key);
            });

            var divBorder=document.createElement("div");
            divBorder.classList.add("bottom-border");
            ul.appendChild(divBorder);
        });
    }
  
    
});


txt.addEventListener('keyup',function(){
    if(txt.value.length == 0){
       ul.replaceChildren();
    }
});