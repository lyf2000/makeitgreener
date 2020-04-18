
alert(2345);
$(document).keyup(function (e) {
    if ($("#nin:focus") && (e.keyCode === 13)) {
       alert('ya!')
    }
 });