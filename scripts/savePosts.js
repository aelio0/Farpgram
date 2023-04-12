setTimeout(() => {
    var cardPost=document.getElementsByClassName("cardPost");  //Prendo tutti gli elementi di classe @accountToSearch

    for (let i=0;i<cardPost.length;i++) {
        cardPost[i].addEventListener('click', function() {  //Per ogni elemento di classe @accountToSearch aggiungo un eventListener per il redirect al profilo
            let urlKey="url-"+i;   //Nome della chiave differente per ogni elemento di classe @accountToSearch
            let urlValue=cardPost[i].src;  //Prendo il valore all'interno dell'elemento HTML
            sessionStorage.setItem(urlKey, urlValue);   //Salvo chiave e valore dell'account cliccato
            sessionStorage.setItem("lastURLClicked", urlKey);   //Salvo quale è stata la chiave dell'ultimo account cliccato
        });
    }
}, 700);
