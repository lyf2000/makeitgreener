let send_ajax = (url, data, type, success = null, error = null) => {


    // if (type == 'POST' || type == 'post') {

    // }

    $.ajax({
        url: url,
        type: type,
        data: data,
        datatype: "json",
        success: success,
        error: error
    });
    // return false;
};


let send_coordinates = (coordinates) => {
    data = {'coords': coordinates};
    send_ajax('/', data, 'POST')
};


function initMap() {

    // var element = document.getElementById('map');
    // var options = {
    //     zoom: 15,
    //     center: {lat: 55.751244, lng: 37.618423},
    //     mapTypeControl: true,
    //     scaleControl: true,
    //     streetViewControl: true,
    //     rotateControl: true,
    //     fullscreenControl: true
    // };
    //
    // var myMap = new google.maps.Map(element, options);
    //
    // var marker = new google.maps.Marker({
    //     position: {lat: 55.751244, lng: 37.618423},
    //     map: myMap
    // });
    //
    // var InfoWindow = new google.maps.InfoWindow({
    //     content: '<h1>Yo</h1>'
    // });

    // InfoWindow.open(myMap, marker);

    // marker.addListener('click', function () {
    //     InfoWindow.open(myMap, marker);
    // });
    //
    // map.addListener('click', function (mapsMouseEvent) {
    //     // Close the current InfoWindow.
    //     infoWindow.close();
    //
    //     // Create a new InfoWindow.
    //     infoWindow = new google.maps.InfoWindow({position: mapsMouseEvent.latLng});
    //     infoWindow.setContent(mapsMouseEvent.latLng.toString());
    //     infoWindow.open(map);
    // });


    var myLatlng = {lat: 55.751244, lng: 37.618423};

    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: myLatlng});

    // Create the initial InfoWindow.
    var infoWindow = new google.maps.InfoWindow(
        // {pos ition: myLatlng}
    );
    infoWindow.open(map);

    // Configure the click listener.
    map.addListener('click', function (mapsMouseEvent) {
        // TODO add marker icon
        // Close the current InfoWindow.
        infoWindow.close();

        // Create a new InfoWindow.
        infoWindow = new google.maps.InfoWindow({position: mapsMouseEvent.latLng});
        infoWindow.setContent(mapsMouseEvent.latLng.toString());
        infoWindow.open(map);
    });

    var btn = document.getElementById('btn');

    btn.addEventListener('click', function () {
        send_coordinates(infoWindow.getContent());
        return false;
    })

}


const METHOD_TYPE_DICT = {
    'list': 'GET',
    'create': "POST",
    'retrieve': 'GET',
    'update': 'PUT'
};

let callAPI = (url, type, data=null, success=null, error=null) => {
    return send_ajax(url, data, type, success, error);
};

let getModelListWithAPIAndToHTML = (model, success=null, error=null) => {

    let url = '/api/' + model + '/';
    callAPI(url, 'GET', {}, success, error);
};


let loadAndRenderPostList = (data) => {
    data.forEach(addPosts)
};


let addPosts = (post) => {
    console.log(post);
    $('#post-list').append(`<h3>${post['author']}, ${post['title']}</h3>`);
};

let BtnClickLoadRenderPostList = () => {
    $('#load-render-post-list').on('click', function () {
        getModelListWithAPIAndToHTML('posts', loadAndRenderPostList);
        return false;
    });
};