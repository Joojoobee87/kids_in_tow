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

let placesOfInterest = [
    ["Harewood House", 53.8999, -1.5115, false, "This is the content of Harewood House"],
    ["Stockeld Park", 53.940942, -1.431498, false, "This is the content of Stockeld Park"],
    ["Valley Gardens", 53.9933, -1.5478, false, "This is the content of Valley Gardens"],
    ["Lotherton Hall", 53.8184, -1.3184, false, "This is the content of Lotherton Hall"],
    ["Roundhay Park", 53.8351, -1.4969, false, "This is the content of Roundhay Park"],
    ["Tropical World", 53.8405, -1.5048, false, "This is the content for Tropical World"],
    ["Middleton Bike Park", 53.7525, -1.5520, false, "This is the content of Middleton Bike Park"],
    ["Ilkley Lido", 53.932019, -1.820720, false, "This is the content of Ilkley Lido"],
    ["Otley Chevin", 53.905, -1.687, false, "This is the content of Otley Chevin"],
    ["Leeds City Museum", 53.8015, -1.5468, false, "This is the content of Leeds City Museum"],
    ["Royal Armouries", 53.7919, -1.5324, false, "This is the content of the Royal Armouries"],
    ["Kirkstall Abbey", 53.8210, -1.6066, false, "This is the content of Kirkstall Abbey"],
    ["The Tetley", 53.7921, -1.5397, false, "This is the content of The Tetley"],
    ["Go Ape Leeds", 53.786964, -1.453748, false, "This is the content of Go Ape Leeds"],
    ["Clip and Climb", 53.784064, -1.573365, false, "This is the content of Clip and Climb"],
    ["Temple Newsam", 53.7844, 1.4597, false, "This is the content of Temple Newsam"],
    ["Jump Inc", 53.782217, -1.575743, false, "This is the content of Jump Inc"],
    ["Tong Garden Centre", 53.767496, -1.680298, false, "This is the content of Tong Garden Centre"],
    ["Science and Media Museum", 53.7911, -1.7560, false, "This is the content of Science and Media Museum"],
    ["Yorkshire Wildlife Park", 53.505003, -1.041154, false, "This is the content of Yorkshire Wildlife Park"],
    ["Xscape", 53.7101, -1.3413, false, "This is the content of Xscape"],
    ["Yeadon Tarn", 53.8688, -1.6744, false, "This is the content of Yeadon Tarn"],
    ["Meanwood Valley Trail", 53.831898, -1.575373, false, "This is the content of Meanwood Valley Trail"],
    ["Fewston and Swinsty Reservoir", 53.983870, -1.714848, false, "This is the content of Fewston Swinsty Reservoir"],
    ["Golden Acre Park", 53.872128, -1.596451, false, "This is the content of Golden Acre Park"],
    ["Middleton Railway Museum", 53.775409, -1.538422, false, "This is the content of Middleton Railway Museum"],
    ["National Railway Museum", 53.961342, -1.096452, false, "This is the content of National Railway Museum"],
    ["Horsforth Park", 53.837598, -1.648420, false, "This is the content of Horsforth Park"]
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