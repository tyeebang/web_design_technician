window.onload = function() {
    $('.fir').click(function() {
        $('.layer').show().css('display', 'block')
    })
    
    $('.layer button').click(function() {
        $('.layer').hide()
    })

    $('.sec').click(function() {
        $('.modal').show().css('display', 'flex')
    })
    
    $('.modal button').click(function() {
        $('.modal').hide()
    })
}