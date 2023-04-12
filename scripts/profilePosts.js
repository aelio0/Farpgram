var postUser=document.getElementById("username");
var ulPosts=document.getElementById("posts");

var requestPosts=new XMLHttpRequest();
requestPosts.open('POST', '../function/profilePosts.php');
requestPosts.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
var postUsername=postUser.textContent;
requestPosts.send("username="+postUsername);

requestPosts.onload = () => {
    let response=JSON.parse(requestPosts.responseText);
    response.forEach(element => {

        let li=document.createElement("li");
        li.classList.add("d-inline");
        ulPosts.appendChild(li);

        let a=document.createElement("a");
        a.setAttribute("href", "../public/post.php");
        li.appendChild(a);

        let img=document.createElement("img");
        img.setAttribute("src", element["url"]);
        img.classList.add("post");
        img.classList.add("mb-4");
        a.appendChild(img);

        img.addEventListener('click', function() {
            sessionStorage.setItem("url", img.src);
            let key="url";
            sessionStorage.setItem("lastURLClicked", key);
        });
    });
}