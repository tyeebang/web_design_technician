window.onload = function() {
    $('.list > p:nth-child(1)').click(function() {
        $('.pop').show().css('display', 'flex')
    })
    $('.pop button').click(function() {
        $('.pop').hide()
    })
}