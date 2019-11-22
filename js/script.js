// Initialise Google Map with marker at Leeds City Centre

function initMap() {

    let map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 53.802156, lng: -1.548946 },
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

    let markerLeedsCentre = new google.maps.Marker({
        position: { lat: 53.802156, lng: -1.548946 },
        map: map,
    });

    addMarkerToMap(map);
}

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

function addMarkerToMap(map) {

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