// Initialise Google Map with marker at Leeds City Centre
var map;
var service;
var infoWindow;
var leeds;

var marker;

// initialise map
function initMap() {

    leeds = { lat: 53.802156, lng: -1.548946 }

    map = new google.maps.Map(document.getElementById('map'), {
        center: leeds,
        zoom: 9,
        styles: [
            {
                featureType: 'landscape.natural',
                stylers: [{ color: '#90AFA2' }]
            },
            {
                featureType: 'landscape.man_made',
                stylers: [{ color: '#4F756B' }]
            },
            {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{ color: '#EF6F6C' }]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#000000' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{ color: '#8CB369' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#000000' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ color: '#FE7F2D' }]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#000000' }]
            },
            {
                featureType: 'road',
                elementType: 'labels',
                stylers: [{ visibility: 'hidden' }]
            },
        ]
    });

    var markerLeedsCentre = new google.maps.Marker({
        position: { lat: 53.802156, lng: -1.548946 },
        map: map,
    });

    // initiate service variable
    service = new google.maps.places.PlacesService(map);

    // call function to add activity markers to map
    addActivityMarkerToMap(map);
    // call perform search function once map is idle
    google.maps.event.addListener(map, 'bounds_changed', performSearch);
}

function performSearch() {

    // define place type requests 
    var requestFoodAndDrink = {
        bounds: map.getBounds(),
        radius: 30000,
        types: ['bakery', 'bar', 'cafe', 'meal_takeaway', 'meal_delivery', 'restaurant']
    };
    var requestEntertainment = {
        bounds: map.getBounds(),
        radius: 30000,
        types: ['bowling_alley', 'movie_theater', 'stadium', 'amusement_park'],
    };
    var requestTourist = {
        bounds: map.getBounds(),
        radius: 30000,
        types: ['tourist_attraction']
    };
    var requestAccommodation = {
        bounds: map.getBounds(),
        radius: 30000,
        types: ['lodging', 'rv_park']
    };
    var requestTransport = {
        bounds: map.getBounds(),
        radius: 30000,
        types: ['airport', 'bus_station', 'car_rental', 'gas_station', 'light_rail_station', 'parking', 'subway_station', 'taxi_stand', 'train_station']
    };
    var requestShopping = {
        bounds: map.getBounds(),
        radius: 30000,
        types: ['convenience_store', 'department_store', 'electronics_store', 'grocery_or_supermarket', 'home_goods_store', 'shopping_mall', 'store', 'supermarket']
    };

    // when search button is clicked get selected value of explore options and show related markers
    $('.search').on('click', function () {

        // get value of selected type
        var selected = $('#explore-options').find(":selected").val();

        console.log(selected);
        if (selected == 'food-drink') {
            service.nearbySearch(requestFoodAndDrink, handleResults);
            return false;
        } else if (selected == 'transport') {
            service.nearbySearch(requestTransport, handleResults);
            return false;
        } else if (selected == 'accommodation') {
            service.nearbySearch(requestAccommodation, handleResults);
            return false;
        } else if (selected == 'shopping') {
            service.nearbySearch(requestShopping, handleResults);
            return false;
        } else if (selected == 'entertainment') {
            service.nearbySearch(requestEntertainment, handleResults);
            return false;
        } else if (selected == 'tourist') {
            service.nearbySearch(requestTourist, handleResults);
            return false;
        }
        console.log(selected);
        return false;
    });
}

function handleResults(results, status) {
    console.log(results);
    marker = [];
    if (status = google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            var place = results[i];
        }
    }
}

function createMarker(place) {

    var placeLocation = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });
    console.log(place);
    var infowindow = new google.maps.InfoWindow({
        content: 'contentString'
    });
    google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(place.name, place.vicinity, place.icon);
        infowindow.open(map, this);
    });
    return false;
}

var placeFoodAndDrink = []
var placeEntertainment = []
var placeTransport = []
var placeShopping = []
var placeAccommodation = []

//function to add markers to map, iterating through the activities variable

function addActivityMarkerToMap(map) {

    //define places of interest including name and coordinates

    var activities = [
        ["Harewood House", 53.8999, -1.5115, false, "This is the content of Harewood House"],
        ["Stockeld Park", 53.940942, -1.431498, false, "This is the content of Stockeld Park"],
        ["Valley Gardens", 53.9933, -1.5478, false, "This is the content of Valley Gardens"],
        ["Roundhay Park", 53.8351, -1.4969, false, "This is the content of Roundhay Park"],
        ["Tropical World", 53.8405, -1.5048, false, "This is the content for Tropical World"],
        ["Leeds Urban Bike Park", 53.7525, -1.5520, false, "This is the content of Leeds Urban Bike Park"],
        ["Royal Armouries", 53.7919, -1.5324, false, "This is the content of the Royal Armouries"],
        ["Go Ape Leeds", 53.786964, -1.453748, false, "This is the content of Go Ape Leeds"],
        ["Clip and Climb", 53.784064, -1.573365, false, "This is the content of Clip and Climb"],
        ["Temple Newsam", 53.7844, -1.4597, false, "This is the content of Temple Newsam"],
        ["Yorkshire Wildlife Park", 53.505003, -1.041154, false, "This is the content of Yorkshire Wildlife Park"],
        ["Meanwood Valley Trail", 53.831898, -1.575373, false, "This is the content of Meanwood Valley Trail"],
        ["Brimham Rocks", 54.0803, -1.6850, false, "This is the content of Brimham Rocks"],
        ["The Arium", 53.840199, -1.432723, false, "This is the content of The Arium"],
    ]

    for (var i = 0; i < activities.length; i++) {

        var activity = activities[i];
        marker = new google.maps.Marker({
            position: { lat: activity[1], lng: activity[2] },
            map: map,
        });
        infowindow = new google.maps.InfoWindow();

        google.maps.event.addListener(marker, 'click', function () {
            infowindow.setContent(activity[4]);
            infowindow.open(map, this);
        });
    }
}