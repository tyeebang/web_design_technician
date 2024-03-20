window.onload = function() {
    $('#notice p:first-child').click(function() {
        $('.pop').show().css('display', 'block')
    })

    $('.pop button').click(function() {
        $('.pop').hide()
    })
}