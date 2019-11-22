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

    var infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);

    // selected places of interest category

    var requestEntertainment = {
        location: leeds,
        radius: 500,
        types: ['amusement_park', 'aquarium', 'art_gallery', 'bowling_alley', 'movie_theater', 'museum', 'park', 'spa', 'stadium', 'tourist_attraction', 'zoo']
    };

    var requestFoodAndDrink = {
        location: leeds,
        radius: 5000,
        types: ['bakery', 'bar', 'cafe', 'meal_takeaway', 'meal_delivery', 'restaurant']
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

    // initiates service variable and retrieves a list of places within 5000 of leeds based on types 

    // results for accommodation
    service.nearbySearch(requestAccommodation, function (searchResults, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i; i < searchResults.length; i++) {
                createMarker(searchResults[i]);
            }
        }
    });

    // results for entertainment
    service.nearbySearch(requestEntertainment, function (searchResults, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i; i < searchResults.length; i++) {
                createMarker(searchResults[i]);
            }
        }
    });

    // results for transport
    service.nearbySearch(requestTransport, function (searchResults, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i; i < searchResults.length; i++) {
                createMarker(searchResults[i]);
            }
        }
    });

    // results for shopping
    service.nearbySearch(requestShopping, function (searchResults, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i; i < searchResults.length; i++) {
                createMarker(searchResults[i]);
            }
        }
    });

    // results for entertainment
    service.nearbySearch(requestFoodAndDrink, function (searchResults, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i; i < searchResults.length; i++) {
                createMarker(searchResults[i]);
            }
        }
    });
    console.log(searchResults);

    // get selected place type from explore-options box

    var selectedType = document.getElementById('#explore-options');
    console.log(selectedType);

    // when search button is clicked get selected value of explore options and show related markers

    console.log($("#explore-options").val());
    google.maps.event.addDomListener(document.getElementById('.search'), 'click', function () {
        if ($("#explore-options option:selected").val() == 'food-drink') {
            changeMarkers(foodDrinkMarkers);
        }
        if ($("#explore-options option:selected").val() == 'transport') {
            changeMarkers(transportMarkers);
        }
        if ($("#explore-options option:selected").val() == 'accommodation') {
            changeMarkers(accommodationMarkers);
        }
        if ($("#explore-options option:selected").val() == 'shopping') {
            changeMarkers(shoppingMarkers);
        }
        if ($("#explore-options option:selected").val() == 'entertainment') {
            changeMarkers(entertainmentMarkers);
        }
    });

    // create markers for search results

    function createMarker(searchResults) {

        var marker = new google.maps.Marker({
            map: map,
            position: searchResults.geometry.location,
            title: searchResults.name
        });
    }

    // when map becomes idle after zooming or panning do this...

    google.maps.event.addListener(map, "idle", function () {

    });

    // when marker is clicked display info window and set content of search results
    google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(searchResults.name, searchResults.rating);
    });

    //define places of interest including name and coordinates

    let activities = [
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
        addActivityMarkerToMap(map);
    }

}