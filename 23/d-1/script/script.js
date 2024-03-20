window.onload = function() {
    $('.menu > li').hover (
        function() {
            $(this).children('ul').stop().slideDown('slow');
        }, function() {
            $(this).children('ul').stop().slideUp('slow');
        }
    );

    let slide = $('.slide > a');
    let now = 0;
    let end = slide.length - 1;
    setInterval(
        function() {
            $(slide[now]).animate({'top' : '-100%'}, 2000, function() {
                $(this).css('top', '100%');
            });
            now = now >= end ? 0 : now + 1;
            $(slide[now]).animate({'top' : '0'}, 2000);
    }, 2000);

    $('.notice li').eq(0).click(function() {
        $('.popup').show().css('display', 'flex');
    });

    $('.pop-btn').click(function() {
        $('.popup').hide();
    });
}