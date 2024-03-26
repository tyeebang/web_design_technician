window.onload = function() {
    $('.notice-list a:first-child').click(function() {
        $('.pop').css('display', 'block')
    })
    $('.pop button').click(function() {
        $('.pop').css('display', 'none')
    })
}