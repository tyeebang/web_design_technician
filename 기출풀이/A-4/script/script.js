window.onload = function() {
    $('.notice-list p:nth-child(1)').click(function() {
        $('.pop').css('display', 'block')
    })
    $('.pop button').click(function() {
        $('.pop').css('display', 'none')
    })
}