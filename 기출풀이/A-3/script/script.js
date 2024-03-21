window.onload = function() {
    $('#notice p:nth-child(1)').click(function() {
        $('.pop').show().css('display', 'block')
    })
    $('.pop button').click(function() {
        $('.pop').hide()
    })
}