// Con JS si possono prendere gli elementi dall'html e modificarli o aggiungerci roba
const textField = document.getElementById("text-field") // Prendo l'elemento con ID="text_field" dall'html
const locations = document.getElementById("locations") // Prendo l'elemento con ID="locations" dall'html

const API_KEY = 'dac10a3908394922919656a6648c61ff' // Salvo l'API key di geoapify

getCurrentPosition();

// Aggiungiamo un listener di tipo "input" alla textField e gli bindiamo una funzione senza nome che verrà runnata ogni volta che cambia qualcosa in questo listener
textField.addEventListener("input", function() {

    const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${textField.value}&apiKey=${API_KEY}&lang=it` // Mi preparo l'URL su cui fare la richiesta

    const request = new XMLHttpRequest();   // Istanzio l'oggetto per fare richieste 
    request.open('GET', url)    // Apriamo una richiesta get con l'url salvato sopra
    request.send();     // Mandiamo la richiesta

    // request.onload viene triggerato quando otteniamo una risposta dall'url
    request.onload = () => {    
        //TODO controllare che request.status abbia un codice di successo e non 404 e tutti i vari controlli
        jsonResponse = JSON.parse(request.response) // Otteniamo la risposta e la parsiamo in un JSON
        locations.replaceChildren(); // Questo serve a cancellare tutti i sottoelementi della div con id="locations"
        
        jsonResponse['features'].forEach(element => {  // Andiamo dentro ogni oggetto 'feature' del JSON
            var placeNode = document.createElement('a') // Creiamo un elemento con il tag <p>
            placeNode.setAttribute("href", "#");
            placeNode.classList.add("d-block");
            placeNode.classList.add("text-white");
            placeNode.classList.add("text-center");
            placeNode.classList.add("text-decoration-none");
            placeNode.innerHTML = element['properties']['formatted']   // Aggiungiamo questo testo nel paragrafo
            locations.appendChild(placeNode)    // Aggiungiamo il paragrafo nell'html
            placeNode.addEventListener('click', function () {
                textField.value=placeNode.textContent;
                locations.replaceChildren();
            });
        });
    }
})


function getCurrentPosition() {
    const url = "https://api.geoapify.com/v1/ipinfo?apiKey=dac10a3908394922919656a6648c61ff";

    const request = new XMLHttpRequest();   // Istanzio l'oggetto per fare richieste 
    request.open('GET', url)    // Apriamo una richiesta get con l'url salvato sopra
    request.send();     // Mandiamo la richiesta

    request.onload = () => {    
        //TODO controllare che request.status abbia un codice di successo e non 404 e tutti i vari controlli
        jsonResponse = JSON.parse(request.response) // Otteniamo la risposta e la parsiamo in un JSON
        locations.replaceChildren() // Questo serve a cancellare tutti i sottoelementi della div con id="locations"
        
        element=jsonResponse['city']
        var placeNode = document.createElement('a') // Creiamo un elemento con il tag <p>
        placeNode.setAttribute("href", "#");
        placeNode.classList.add("d-block");
        placeNode.classList.add("text-white");
        placeNode.classList.add("text-center");
        placeNode.classList.add("text-decoration-none");
        placeNode.innerHTML = element['name']  // Aggiungiamo questo testo nel paragrafo
        locations.appendChild(placeNode)    // Aggiungiamo il paragrafo nell'html
        placeNode.addEventListener('click', function () {
            textField.value=placeNode.textContent;
            locations.replaceChildren();
        });
    };
}