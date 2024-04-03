window.onload = function() {
    $('#notice a:first-child').click(function() {
        $('#pop').css('display', 'block')
    })
    $('#pop button').click(function() {
        $('#pop').css('display', 'none')
    })
}