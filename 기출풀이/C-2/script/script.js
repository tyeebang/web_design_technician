window.onload = function() {
    $('.notice-list a:first-child').click(function() {
        $('.pop').css('display', 'flex')
    })
    $('.pop-inner button').click(function() {
        $('.pop').css('display', 'none')
    })
}