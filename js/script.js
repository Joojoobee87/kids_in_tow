// Initialise Google Map with marker at Leeds City Centre

function initMap() {

    let map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 53.802156, lng: -1.548946 },
        zoom: 10
    });

    let markerLeedsCentre = new google.maps.Marker({
        position: { lat: 53.802156, lng: -1.548946 },
        map: map
    });

    addMarkerToMap(map);
}

//define places of interest including name and coordinates

let placesOfInterest = [
    ["Harewood House", 53.8999, -1.5115, false, "This is the content of Harewood House"],
    ["Stockeld Park", 53.940942, -1.431498, false, "This is the content of Stockeld Park"],
    ["Valley Gardens", 53.9933, -1.5478, false, "This is the content of Valley Gardens"],
]

//function to add markers to map, iterating through the placesOfInterest variable

function addMarkerToMap(map) {

    for (let i = 0; i < placesOfInterest.length; i++) {

        let place = placesOfInterest[i];
        let marker = new google.maps.Marker({
            position: { lat: place[1], lng: place[2] },
            map: map,
        });

        let infoWindow = new google.maps.InfoWindow({
            content: place[4]
        });

        marker.addListener('click', function() {
            infoWindow.open(map, marker);
        });
    }
}
