// Initialise Google Map with marker at Leeds City Centre

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
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
    ["Harewood House", 53.8999, -1.5115, false],
    ["Stockeld Park", 53.940942, -1.431498],
    ["Valley Gardens", 53.9933, -1.5478, false],
]

//function to add markers to map, iterating through the placesOfInterest variable

function addMarkerToMap(map) {

    for (var i = 0; i < placesOfInterest.length; i++) {

        var place = placesOfInterest[i];
        var marker = new google.maps.Marker({
            position: { lat: place[1], lng: place[2] },
            map: map,
            title: place[0],
        });
        marker.addListener('click', function() {
            infowindow.open(map, marker);
        })
    }
}

