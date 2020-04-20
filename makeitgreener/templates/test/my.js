$(document).keyup(function (e) {
    if ($("#nin:focus") && (e.keyCode === 13)) {

    }
});

$(document).keyup(function (e) {

    if ($("#select-tag-input:focus") && (e.keyCode === 13)) {
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