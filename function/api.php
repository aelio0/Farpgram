<?php 
    // TODO la posizione è imprecisa, è da fixare
    // https://apidocs.geoapify.com/docs/geocoding/address-autocomplete/#autocomplete
    // https://apidocs.geoapify.com/docs/geocoding/forward-geocoding/#api

    $text = "legn";  // TODO sostituire gli spazi etc... (formattare la stringa), questo è l'input dell'API
    $API_KEY = "dac10a3908394922919656a6648c61ff"; // Da sostituire con la vostra API key
    $lang = "it";   // Come vengono ritornate le robe dall'api (in italiano inglese etc...)

    $jsonurl = "https://api.geoapify.com/v1/geocode/autocomplete?text={$text}&apiKey={$API_KEY}"; //&lang={$lang}&filter=countrycode:{$lang}
    $features = json_decode(file_get_contents($jsonurl), true)['features'];

    foreach ($features as &$feature) {
        if(!empty($feature["properties"]["city"])){ 
            echo "City: {$feature["properties"]["city"]}";
            echo '<br>';
        }
        if(!empty($feature["properties"]["county"])){ 
            echo "County: {$feature["properties"]["county"]}";
            echo '<br>';
        }
        if(!empty($feature["properties"]["name"])){ 
            echo "Name: {$feature["properties"]["name"]}";
            echo '<br>';
        }
        if(!empty($feature["properties"]["formatted"])){ 
            echo "Formatted: {$feature["properties"]["formatted"]}";
            echo '<br>';
        }
        echo '<br>';
    }

?>