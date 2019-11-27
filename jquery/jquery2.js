$(document).ready(function () {

    function filterSelected() {

        let button = $('.button');
        let activity = $('.activities');
        let applyFilter = $('.apply');

        activity.hide();

        button.on('click', function () {
            $(this).addClass('highlight');
            $('.' + this.id).show();
            button.on('click', function () {
                $(this).removeClass('highlight');
                $('.' + this.id).hide();
                filterSelected();
            })
        });
    }
    filterSelected();



    function autoSlide() {

        let slides = $('.slides');
        console.log(slides);
        let slideIndex = 0;
        console.log(slideIndex);
        let i;
        console.log(i);

        console.log(slides);

        for (i = 0; i < slides.length; i++) {
            console.log(i);
            $(slides[i]).css("display", "block");
            console.log(slides[i]);
        }
        slideIndex++;
        console.log(slides[i]);
        if (slideIndex > slides.length) { slideIndex = 1 }

        $(slides[i]).css("display", "none");
        setTimeout(autoSlide, 2000); // Change image every 2 seconds
    }

    function slideshow() {

        let images = Array.from($(".modal-image > img"));
        let nextButton = $(".next");
        let prevButton = $(".prev");
        let index = 1;
        let currentImages = $(this.images);

        console.log(images);
        console.log($(images).parent());

        $(images[0]).css("display", "block");

        $(nextButton).on('click', function () {
            for (i = 0; i < images.length; i++) {
                $(images[i]).css("display", "none");
            }
            index++;
            if (index > images.length - 1) {
                $(images[images.length - 1]).css("display", "block");
                index = 0;
                return false;
            }
            $(images[index - 1]).css("display", "block");
        })

        $(prevButton).on('click', function () {
            for (i = 0; i < images.length; i++) {
                $(images[i]).css("display", "none");
            }
            index--;
            if (index < 1) {
                $(images[images.length + 1]).css("display", "block");
                index = images.length
            }
            $(images[index - 1]).css("display", "block");
        })
    }
    slideshow();
});



/// maps

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

var requests = {
    "requestRestaurant": {
        "type": ['restaurant'],
        "icon": 'icons/restaurant.png'
    },
    "requestBus": {
        "type": ['bus'],
        "icon": 'icons/restaurant.png'
    },
    "requestMovie": {
        "type": ['movie-theater'],
        "icon": 'icons/movie.png'
    }
};

var got = Object.keys(requests).filter(function (key) {
    if (Object.values(requests).includes('restaurant')) {
        console.log("yes");
    }
});

var requests = {
    "requestRestaurant": {
        "type": ['restaurant'],
        "icon": 'icons/restaurant.png'
    },
    "requestBus": {
        "type": ['bus'],
        "icon": 'icons/bus.png'
    },
    "requestMovie": {
        "type": ['movie-theater'],
        "icon": 'icons/movie.png'
    }
};

if (Object.values(requests).includes('icons/bus.png')) {
    console.log("yes");
} else {
    console.log("no");
}
