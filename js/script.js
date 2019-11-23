// Initialise Google Map with marker at Leeds City Centre

function initMap() {

    let leeds = { lat: 53.802156, lng: -1.548946 }
    let map = new google.maps.Map(document.getElementById('map'), {
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

    let markerLeedsCentre = new google.maps.Marker({
        position: { lat: 53.802156, lng: -1.548946 },
        map: map,
    });

    // when search button is clicked get selected value of explore options and show related markers
    console.log($("#explore-options").val());
    $('.search').on('click', function () {
        var selected = $('#explore-options').find(":selected").val();
        console.log(selected);

        // initiate service variable

        var service = new google.maps.places.PlacesService(map);

        // define place type requests 
        var requestFoodAndDrink = {
            location: leeds,
            radius: 5000,
            types: ['bakery', 'bar', 'cafe', 'meal_takeaway', 'meal_delivery', 'restaurant']
        };
        var requestEntertainment = {
            location: leeds,
            radius: 500,
            types: ['amusement_park', 'aquarium', 'art_gallery', 'bowling_alley', 'movie_theater', 'museum', 'park', 'spa', 'stadium', 'tourist_attraction', 'zoo']
        };
        var requestAccommodation = {
            location: leeds,
            radius: 5000,
            types: ['lodging', 'rv_park']
        };
        var requestTransport = {
            location: leeds,
            radius: 5000,
            types: ['airport', 'bus_station', 'car_rental', 'gas_station', 'light_rail_station', 'parking', 'subway_station', 'taxi_stand', 'train_station']
        };
        var requestShopping = {
            location: leeds,
            radius: 5000,
            types: ['convenience_store', 'department_store', 'electronics_store', 'grocery_or_supermarket', 'home_goods_store', 'shopping_mall', 'store', 'supermarket']
        };

        if (selected == 'food-drink') {
            service.nearbySearch(requestFoodAndDrink, callback);
            return false;
        } else if (selected == 'transport') {
            service.nearbySearch(requestTransport, callback);
            return false;
        } else if (selected == 'accommodation') {
            service.nearbySearch(requestAccommodation, callback);
        } else if (selected == 'shopping') {
            service.nearbySearch(requestShopping, callback);
        } else if (selected == 'entertainment') {
            service.nearbySearch(requestEntertainment, callback);
        }

        function callback(results, status) {
            if (status = google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    createMarker(results[i]);
                    console.log(results[i].name, results[i].types);
                }
            }
        }

        function createMarker(place) {
            var placeLocation = place.geometry.location;
            var markerCafe = new google.maps.Marker({
                map: map,
                position: place.geometry.location
            });
            google.maps.event.addListener(markerCafe, 'click', function () {
                infowindow.setContent(place.name, place.type);
                infowindow.open(map, this);

            });
        }
        return false;
    });

    // selected places of interest category

    var request = {
        location: { lat: 53.802156, lng: -1.548946 },
        radius: 5000,
        type: ['restaurant']
    };


    var placeFoodAndDrink = []
    var placeEntertainment = []
    var placeTransport = []
    var placeShopping = []
    var placeAccommodation = []


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

    //function to add markers to map, iterating through the placesOfInterest variable

    function addActivityMarkerToMap(map) {

        for (let i = 0; i < activities.length; i++) {

            let activity = activities[i];
            let marker = new google.maps.Marker({
                position: { lat: activity[1], lng: activity[2] },
                map: map,
            });

            let infoWindow = new google.maps.InfoWindow({
                content: activity[4]
            });

            marker.addListener('click', function () {
                infoWindow.open(map, marker);
            });
        }
    }
    addActivityMarkerToMap(map);
}