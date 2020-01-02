// function update(e) {
//     if (e.keyCode == 0){
//         document.getElementsByClassName('.btn').disabled = true;
//     };
// }

$('.drop-btn').click(function () {
    $('.filter-box').val('');
    $('.filter-box').hide();
    let el = $(this).attr('id').replace('drop-', '');
    $('.dropbtn').html($(this).text());
    $('#'+el).show();
});

$('#url').keyup(function() {
    if (validURL($(this).val())) {
        $(this).removeClass('error');
    }
    else {
        $(this).addClass('error');
    }
    // else {
    //     $(this).attr('border-color', 'unset');
    // }
});

function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}
