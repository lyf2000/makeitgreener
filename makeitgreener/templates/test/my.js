$(document).keyup(function (e) {
    if ($("#nin:focus") && (e.keyCode === 13)) {

    }
});

$(document).keyup(function (e) {

    if ($("#select-tag-input:focus") && (e.keyCode === 13)) {
        let selectTagInput = $("#select-tag-input");
        let newTagName = selectTagInput.val().replace(/ /g,'').toLowerCase();
        if (newTagName !== '') {
            addNewSelectedTagName(newTagName);
            selectTagInput.val('');
        }
    //    TODO error messge - red
    }
});

let addNewSelectedTagName = (tagName) => {
    $('#selected-tags-list').append(`<h6 class="inline"><span class="badge badge-primary"><a href="#"
                                                                    style="color: white;text-decoration:none">&times;</a> ${tagName}</span>
            </h6>`)
};