setTimeout(() => {
    var accountsToSearch=document.getElementsByClassName("accountToSearch");  //Prendo tutti gli elementi di classe @accountToSearch

    for (let i=0;i<accountsToSearch.length;i++) {
        accountsToSearch[i].addEventListener('click', function() {  //Per ogni elemento di classe @accountToSearch aggiungo un eventListener per il redirect al profilo
            var key="accountToSearch-"+i;   //Nome della chiave differente per ogni elemento di classe @accountToSearch
            var value=accountsToSearch[i].textContent;  //Prendo il valore all'interno dell'elemento HTML
            sessionStorage.setItem(key, value);   //Salvo chiave e valore dell'account cliccato
            sessionStorage.setItem("lastClicked", key);   //Salvo quale è stata la chiave dell'ultimo account cliccato
        });
    }
}, 700);