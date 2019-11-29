// Initialise Google Map with marker at Leeds City Centre
var map;
var service;
var infoWindow;
var leeds;
var bounds;
var marker;
var markers = [];
var id;

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
    google.maps.event.addListener(map, 'bounds_changed', function () {
        bounds = map.getBounds();
        place = [];
        performSearch();
    })

    // Deletes all markers in the array by removing references to them.
    $('.reset').on('click', function () {
        markers = [];
    })
}

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

function performSearch() {

    // define place type requests 
    var requestRestaurant = {
        bounds: map.getBounds(),
        types: ['restaurant']
    };
    var requestCafe = {
        bounds: map.getBounds(),
        types: ['cafe']
    };
    var requestMovie = {
        bounds: map.getBounds(),
        types: ['movie_theater']
    };
    var requestBowling = {
        bounds: map.getBounds(),
        types: ['bowling_alley']
    };
    var requestTourist = {
        bounds: map.getBounds(),
        types: ['tourist_attraction']
    };
    var requestAmusement = {
        bounds: map.getBounds(),
        types: ['amusement_park']
    };
    var requestPark = {
        bounds: map.getBounds(),
        types: ['park']
    };
    var requestAccommodation = {
        bounds: map.getBounds(),
        types: ['lodging']
    };
    var requestShopping = {
        bounds: map.getBounds(),
        types: ['shopping_mall']
    };
    var requestTrain = {
        bounds: map.getBounds(),
        types: ['train_station']
    };
    var requestBus = {
        bounds: map.getBounds(),
        types: ['bus_station']
    };

    // when search button is clicked get selected value of explore options and show related markers
    $('.search').on('click', function () {

        // get value of selected type
        var selected = $('#explore-options').find(":selected").val();

        if (selected == 'restaurant') {
            service.nearbySearch(requestRestaurant, handleResults);
            return false;
        } else if (selected == 'cafe') {
            service.nearbySearch(requestCafe, handleResults);
            return false;
        } else if (selected == 'movie-theater') {
            service.nearbySearch(requestMovie, handleResults);
            return false;
        } else if (selected == 'bowling-alley') {
            service.nearbySearch(requestBowling, handleResults);
            return false;
        } else if (selected == 'tourist') {
            service.nearbySearch(requestTourist, handleResults);
            return false;
        } else if (selected == 'amusement') {
            service.nearbySearch(requestAmusement, handleResults);
            return false;
        } else if (selected == 'park') {
            service.nearbySearch(requestPark, handleResults);
            return false;
        } else if (selected == 'accommodation') {
            service.nearbySearch(requestAccommodation, handleResults);
            return false;
        } else if (selected == 'shopping') {
            service.nearbySearch(requestShopping, handleResults);
            return false;
        } else if (selected == 'train') {
            service.nearbySearch(requestTrain, handleResults);
            return false;
        } else if (selected == 'bus') {
            service.nearbySearch(requestBus, handleResults);
            return false;
        }
    })
}

function handleResults(results, status, icon) {
    if (status = google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            var place = results[i];
            var id = results[i].place_id;
            console.log(id);
            markers.push(results[i]);
            createMarker(place, id);
        }
    }
}

function createMarker(place, id) {
    marker = [];
    var icon;

    var type = $('#explore-options').find(":selected").val();

    console.log(place);

    // change marker icon depending on value of selected type

    if (type == 'restaurant') {
        icon = 'icons/restaurant.png'
    } else if (type == 'cafe') {
        icon = 'icons/cafe.png'
    } else if (type == 'movie-theater') {
        icon = 'icons/movie.png'
    } else if (type == 'bowling-alley') {
        icon = 'icons/bowling.png'
    } else if (type == 'tourist') {
        icon = 'icons/tourist.png'
    } else if (type == 'amusement') {
        icon = 'icons/amusement.png'
    } else if (type == 'park') {
        icon = 'icons/park.png'
    } else if (type == 'accommodation') {
        icon = 'icons/bedroom.png'
    } else if (type == 'shopping') {
        icon = 'icons/shopping.png'
    } else if (type == 'train') {
        icon = 'icons/train.png'
    } else if (type == 'bus') {
        icon = 'icons/bus.png'
    }

    id = place.place_id;
    console.log(id);
    service = new google.maps.places.PlacesService(map);
    service.getDetails({ placeId: id }, callback);

    function callback(place, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            console.log(place);
            var website = place.website;
            console.log(website);

            var marker = new google.maps.Marker({
                map: map,
                position: place.geometry.location,
                icon: icon
            });

            infowindow = new google.maps.InfoWindow();
            var name = place.name;
            var address = place.vicinity;
            var rating;
            if (place.rating == undefined) {
                rating = 'Not available'
            } else {
                rating = place.rating
            }
            google.maps.event.addListener(marker, 'click', function () {
                infowindow.setContent(name + '<br>' + address + '<br>' + 'Rating: ' + rating + 'Website: ' + website);
                infowindow.open(map, this);
            });
        }
    }
}