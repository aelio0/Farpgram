var postContainer=document.getElementById("post-container");

var requestHome=new XMLHttpRequest();
requestHome.open('GET', '../function/homePosts.php');
requestHome.send();

requestHome.onload = () => {
    let response=JSON.parse(requestHome.responseText);

    let i=0;
    while (response[i]!=null) {
        response[i].forEach(element => {
            //TITLE
            let mxAuto=document.createElement("div");   //Creazione div con classi
            mxAuto.classList.add("mx-auto");
            mxAuto.classList.add("card");
            mxAuto.classList.add("text-bg-dark");
            mxAuto.classList.add("mb-3");
            postContainer.appendChild(mxAuto);

            let cardBody=document.createElement("div"); //Creazione div con classe
            cardBody.classList.add("card-body");
            mxAuto.appendChild(cardBody);

            let profileImage=document.createElement("img");
            profileImage.src=element["imageURL"];
            profileImage.classList.add("d-inline");
            profileImage.classList.add("profile-image");
            profileImage.classList.add("rounded-circle");
            profileImage.classList.add("me-2");
            cardBody.appendChild(profileImage);

            let cardTitle=document.createElement("h5");
            cardTitle.classList.add("card-title");
            cardTitle.classList.add("d-inline");
            cardBody.appendChild(cardTitle);
            
            let accSearch=document.createElement("a");
            accSearch.href="profile.php";
            accSearch.classList.add("accountToSearch");
            accSearch.classList.add("text-decoration-none");
            accSearch.classList.add("link");
            accSearch.innerHTML=element['username'];
            cardTitle.appendChild(accSearch);

            let cardText=document.createElement("p");
            cardText.classList.add("card-text");
            cardText.innerHTML=element['location'];
            cardBody.appendChild(cardText);

            //BODY
            let imageRef=document.createElement("a");
            imageRef.href="post.php";
            mxAuto.appendChild(imageRef);

            let postImage=document.createElement("img");
            postImage.src=element['url'];
            postImage.classList.add("cardPost");
            postImage.classList.add("card-img-top");
            postImage.classList.add("post-size");
            postImage.alt="Caricamento in corso";
            imageRef.appendChild(postImage);

            let cardBody2=document.createElement("div");
            cardBody2.classList.add("card-body");
            mxAuto.appendChild(cardBody2);
            
            let heartRef=document.createElement("a");
            heartRef.href="#";
            cardBody2.appendChild(heartRef);

            let heart=document.createElement("i");
            heart.classList.add("fa-regular");
            heart.classList.add("fa-heart");
            heart.classList.add("text-white");
            heartRef.appendChild(heart);
            
            let commentRef=document.createElement("a");
            commentRef.classList.add("ms-1");
            commentRef.href="post.php";
            cardBody2.appendChild(commentRef);

            let comment=document.createElement("i");
            comment.classList.add("fa-regular");
            comment.classList.add("fa-comment");
            comment.classList.add("text-white");
            commentRef.appendChild(comment);

            let cardText2=document.createElement("p");
            cardText2.classList.add("card-text");
            cardText2.innerHTML=element['body'];
            cardBody2.appendChild(cardText2);

            let postDate=document.createElement("p");
            postDate.classList.add("grey");
            postDate.innerHTML=element['actionTime'];
            cardBody2.appendChild(postDate);
        })
        i++;
    }
        
}