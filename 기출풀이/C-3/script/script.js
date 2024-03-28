window.onload = function() {
    $('#nt-list li:first-child').click(function() {
        $('#pop').css('display', 'block')
    })
    $('#pop button').click(function() {
        $('#pop').css('display', 'none')
    })
}