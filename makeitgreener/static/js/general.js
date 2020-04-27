


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


// function initMap() {

//     // var element = document.getElementById('map');
//     // var options = {
//     //     zoom: 15,
//     //     center: {lat: 55.751244, lng: 37.618423},
//     //     mapTypeControl: true,
//     //     scaleControl: true,
//     //     streetViewControl: true,
//     //     rotateControl: true,
//     //     fullscreenControl: true
//     // };
//     //
//     // var myMap = new google.maps.Map(element, options);
//     //
//     // var marker = new google.maps.Marker({
//     //     position: {lat: 55.751244, lng: 37.618423},
//     //     map: myMap
//     // });
//     //
//     // var InfoWindow = new google.maps.InfoWindow({
//     //     content: '<h1>Yo</h1>'
//     // });

//     // InfoWindow.open(myMap, marker);

//     // marker.addListener('click', function () {
//     //     InfoWindow.open(myMap, marker);
//     // });
//     //
//     // map.addListener('click', function (mapsMouseEvent) {
//     //     // Close the current InfoWindow.
//     //     infoWindow.close();
//     //
//     //     // Create a new InfoWindow.
//     //     infoWindow = new google.maps.InfoWindow({position: mapsMouseEvent.latLng});
//     //     infoWindow.setContent(mapsMouseEvent.latLng.toString());
//     //     infoWindow.open(map);
//     // });


//     var myLatlng = {lat: 55.751244, lng: 37.618423};

//     var map = new google.maps.Map(
//         document.getElementById('map'), {zoom: 4, center: myLatlng});

//     // Create the initial InfoWindow.
//     var infoWindow = new google.maps.InfoWindow(
//         // {pos ition: myLatlng}
//     );
//     infoWindow.open(map);

//     // Configure the click listener.
//     map.addListener('click', function (mapsMouseEvent) {
//         // TODO add marker icon
//         // Close the current InfoWindow.
//         infoWindow.close();

//         // Create a new InfoWindow.
//         infoWindow = new google.maps.InfoWindow({position: mapsMouseEvent.latLng});
//         infoWindow.setContent(mapsMouseEvent.latLng.toString());
//         infoWindow.open(map);
//     });

//     var btn = document.getElementById('btn');

//     btn.addEventListener('click', function () {
//         send_coordinates(infoWindow.getContent());
//         return false;
//     })

// }

let callAPI = (url, type, data = null, success = null, error = null) => {
    return send_ajax(url, data, type, success, error);
};

let getModelListWithAPIAndToHTML = (model, params, success, error) => {

    let url = '/api/' + model + '/';
    if (params) {
        url += '?' + params;
    }
    callAPI(url, 'GET', {}, success, error);
};

// /posts
let loadAndRenderPostList = (data) => {
    data.forEach(addPosts)
};


let loadAndRenderPostListFiltered = (data) => {
    $('#post-list').empty();
    loadAndRenderPostList(data);
};


let addPosts = (post) => {
    console.log(post);
    $('#post-list').append(`<div class="col-12 card mb-4">
    <div class="card-body">
        <h5 class="card-title">Card title ${post['title']}</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
</div>`);
};


let BtnClickPostListFilter = () =>  {
    $('#load-render-post-list-filtered').on('click', function () {
        let params = $('form#post-list-filter-form').serialize();
        getModelListWithAPIAndToHTML('posts', params, loadAndRenderPostListFiltered, null);
        return false;
    });
};



$(document).keyup(function (e) {
    if ($("#nin").is(":focus") && (e.keyCode === 13)) {
        
        collectFilterDataPostList();
    }
});


let collectFilterDataPostList = () => {
    
    var searchText = $('#nin').val();
    var tagNameList = getTagNamesToFilterPostList();
    alert(searchText);
    alert(tagNameList);
}

let getTagNamesToFilterPostList = () => {
    nameList = []
    
    $.each($('.tag-badge'), function() {
        nameList.push($(this).data('name'));
    })

    return nameList;
}


$(document).keyup(function (e) {

    if ($("#select-tag-input").is(":focus") && (e.keyCode === 13)) {
        
        let selectTagInput = $("#select-tag-input");
        //TODO already in list
        let newTagName = selectTagInput.val().replace(/ /g, '').toLowerCase();
        if (newTagName !== '') {
            addNewSelectedTagName(newTagName);
            selectTagInput.val('');
        }
        //    TODO error messge - red
    }
});

let addNewSelectedTagName = (tagName) => {
    $('#selected-tags-list').append(`<h6 data-name="${tagName}" class="inline tag-badge">
               <span class="badge badge-primary"><a href="#" data-name="${tagName}" style="color: white;text-decoration:none">&times;</a> ${tagName}</span>
            </h6>`)
};

let btnClickRemoveTagFromSelectedTagList = () => {
    $('div#selected-tags-list').on('click', 'h6 a', function (e) {
        $(`h6.tag-badge[data-name=${$(this).data("name")}]`).remove();
        return false;
    })
};


var map = null;
var currMarker = null;


function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 3,
      center: {lat: -28.024, lng: 140.887}
    });
    
    
    
    // Create an array of alphabetical characters used to label the markers.
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    
    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    
    // var markers = locations.map(function(location, i) {
    //   return new google.maps.Marker({
    //     position: location,
    //     label: labels[i % labels.length]
    //   });
    // });
    
    
    // var marker = new google.maps.Marker({
    //                 position: {lat: 42.3601, lng: -71.0589},
    //                 map: map
    //             })
    
                // map.addListener('center_changed', function() {
        // window.setTimeout(function() {
        //   map.panTo(marker.getPosition());
        // }, 3000);
    //   });
    
    map.addListener('click', function(e) {
        // alert(e.latLng);
    
        currMarker.setMap(null);
        currMarker = new google.maps.Marker({
                position: e.latLng,
                map: map
      });
    })
    
    
    // marker.addListener('click', function() {
        // map.setZoom(8);
        // map.setCenter(marker.getPosition());
        // map.panTo(marker.getPosition());
    //   });
    // Add a marker clusterer to manage the markers.
    // var markerCluster = new MarkerClusterer(map, markers,
    //     {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
    
    // var infowindow = new google.maps.InfoWindow({
    //           content: '<h3>Say WHaaaa</h3?'
    //         });
    
    //         marker.addListener('click', function() {
    //             // alert(1);
    //           infowindow.open(marker.get('map'), marker);
    //         });
    
            
    // map.addListener('click', function(e) {
            
    //             currMarker = new google.maps.Marker({
    //             position: {lat: 42.3601, lng: -71.0589},
    //             map: map
    //         })
    //   });
        
    $('#btn').on('click', function(e) {
        
        console.log(currMarker.position);
        
        send_ajax(document.location.pathname, {'coords': String(currMarker.position)}, 'post')
        return false;
    })
    
    }

let addCurrnetMeetMarker = (position) => {
    map.setCenter(position);
    currMarker = new google.maps.Marker({
        position: position,
        map: map
    });
};