window.onload = function() {
    $('.menu > li').hover(
        function() {
            $(this).children('ul').stop().slideDown('fast');
        }, function() {
            $(this).children('ul').stop().slideUp('fast');
        }
    );

    $('.notice a:nth-child(3)').click(
        function() {
            $('.popup').show().css('display', 'flex');
        }
    )

    $('.popup button').click(
        function() {
            $('.popup').css('display', 'none');
        }
    )
}