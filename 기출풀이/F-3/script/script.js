window.onload = function() {
    let index = 0

    $('.sub_menu > ul').hover(function() {
        index = $(this).index()
        $(`.main_menu li:nth-child(${index + 1}) a`).css('background-color', '#f04467')
        $(`.main_menu li:nth-child(${index + 1}) a`).css('color', '#0ed5ce')
    }, function() {
        $(`.main_menu li:nth-child(${index + 1}) a`).css('background-color', '#0a9b97')
        $(`.main_menu li:nth-child(${index + 1}) a`).css('color', '#f04467')
    })

    $('#notice a:first-child').click(function() {
        $('#pop').css('display', 'block')
    })
    $('#pop button').click(function() {
        $('#pop').css('display', 'none')
    })
}