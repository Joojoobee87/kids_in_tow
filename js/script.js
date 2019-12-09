// Initialise Google Map with marker at Leeds City Centre
var map;
var service;
var infoWindow;
var leeds;
var bounds;
var marker;
var id;

// initialise map
function initMap() {

    leeds = { lat: 53.802156, lng: -1.548946 }

    map = new google.maps.Map(document.getElementById('map'), {
        center: leeds,
        zoom: 10,
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
        performSearch();
    })

}

//function to add markers to map, iterating through the activities variable

function addActivityMarkerToMap(map) {

    //define places of interest including name and coordinates

    var activities = [
        ["Harewood House", 53.8999, -1.5115, false, "images/Harewood_House/HarewoodHouse.jpg"],
        ["Stockeld Park", 53.940942, -1.431498, false, "images/Stockeld_Park/StockeldPark.jpg"],
        ["Valley Gardens", 53.9933, -1.5478, false, "images/Valley_Gardens/ValleyGardens.jpg"],
        ["Roundhay Park", 53.8351, -1.4969, false, "images/Roundhay_Park/RoundhayPark.jpg"],
        ["Tropical World", 53.8405, -1.5048, false, "images/Tropical_World/TropicalWorld.jpg"],
        ["Leeds Urban Bike Park", 53.7525, -1.5520, false, "images/Leeds_Urban_Bike_Park/LUBikePark.jpg"],
        ["Royal Armouries", 53.7919, -1.5324, false, "images/Royal_Armouries/RoyalArmouries.jpg"],
        ["Go Ape Leeds", 53.786964, -1.453748, false, "images/Go_Ape/GoApe.jpg"],
        ["Clip and Climb", 53.784064, -1.573365, false, "images/Clip_And_Climb/ClipAndClimb.jpg"],
        ["Temple Newsam", 53.7844, -1.4597, false, "images/Temple_Newsam/TempleNewsam.jpg"],
        ["Yorkshire Wildlife Park", 53.505003, -1.041154, false, "images/Yorkshire_Wildlife_Park/YorkshireWP.jpg"],
        ["Meanwood Valley Trail", 53.831898, -1.575373, false, "images/Meanwood_Valley_Trail/MeanwoodValleyTrail.jpg"],
        ["Brimham Rocks", 54.0803, -1.6850, false, "images/Brimham_Rocks/Brimham.jpg"],
        ["The Arium", 53.840199, -1.432723, false, "images/The_Arium/TheArium.jpg"],
    ]

    for (let i = 0; i < activities.length; i++) {

        let activity = activities[i];
        let marker = new google.maps.Marker({
            position: { lat: activity[1], lng: activity[2] },
            map: map,
        });

        var infoWindow = new google.maps.InfoWindow();

        marker.addListener('click', function () {
            infoWindow.open(map, marker);
            infoWindow.setContent(`<h5 style="color:#4F756B; font-family: 'Nunito';">${activity[0]}</h5>` + `<img src="${activity[4].toString()}" alt="activity pic" height="120" width="180"></img>`);
        });
    }
}

function performSearch() {

    // define place type requests 
    var requestRestaurant = {
        bounds: map.getBounds(),
        radius: 5000,
        types: ['restaurant'],
    };
    var requestCafe = {
        bounds: map.getBounds(),
        radius: 5000,
        types: ['cafe'],
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
            createMarker(place);
        }
    }
}

function createMarker(place, id) {

    var icon;
    var type = $('#explore-options').find(":selected").val();

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

    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        icon: icon
    });

    // initialise info window
    infowindow = new google.maps.InfoWindow();

    // names and address variables of place to use in info window
    var name = place.name;
    var address = place.vicinity;

    // rating variable of place - if null then show as 'not available
    var rating;
    if (place.rating == undefined) {
        rating = 'Not available'
    } else {
        rating = place.rating
    }

    // On click of marker show info window
    // Call on Google Places Service to get website details of this place
    google.maps.event.addListener(marker, 'click', function () {
        var id = place.place_id;
        infowindow.open(map, this);
        service = new google.maps.places.PlacesService(map);
        service.getDetails({ placeId: id }, callback);
    });

    // Set info window content
    function callback(place) {
        var website = `<a href="${place.website.toString()}" target="_blank">Click here..</a>`;
        infowindow.setContent(name + '<br>' + address + '<br>' + 'Rating: ' + rating + '<br>' + 'Website: ' + website);
    }

    // Remove all explore leeds markers from map when reset is clicked
    $('.reset').on('click', function () {
        marker.setMap(null);
    })
}

// EmailJS - contact form
function sendEmail(contactForm) {
    var customer = $('#customer-type').find(":selected").text();
    var subscribed = $('#subscribed').val();
    emailjs.send("default_service", "kids_in_tow_contact", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.message.value,
        "customer_type": customer,
        "subscribed": subscribed,
    })
        .then(
            function (response) {
                console.log("hello");
                console.log("SUCCESS", response);
                $(".contact-container").css("display", "block");
                $(".contact-form").hide();
                $(".contact-thanks").show();

            },
            function (error) {
                console.log("FAILED", error);
                $(".contact-container").css("display", "block");
                $(".contact-form").hide();
                $(".contact-error").show();
            }
        );
    return false;
} 