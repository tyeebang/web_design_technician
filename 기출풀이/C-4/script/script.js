window.onload = function() {
    $('#no-list li:first-child').click(function() {
        $('#pop').css('display', 'flex')
    })
    $('#pop button').click(function() {
        $('#pop').css('display', 'none')
    })
}