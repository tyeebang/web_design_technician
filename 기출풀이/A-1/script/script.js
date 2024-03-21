window.onload = function() {
    $('#notice p:first-child').click(function() {
        $('.pop').show().css('display', 'block')
    })

    $('.pop button').click(function() {
        $('.pop').hide()
    })

    $('.direct p').hover(function() {
        $('.direct img').css('filter', 'grayscale(1)')
    }, function() {
        $('.direct img').css('filter', 'none')
    })
}