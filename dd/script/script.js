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
            $(slide[now]).animate({'left' : '-100%'}, 2000, function() {
                $(this).css('left', '100%');
            });
            now = now >= end ? 0 : now + 1;
            // if (now >= end) {
            //     now = 0;
            // } else {
            //     now += 1;
            // }
            $(slide[now]).animate({'left' : '0'}, 2000);
    }, 2000);

    $('.notice li').eq(0).click(function() {
        $('.popup').show().css('display', 'flex');
    });

    $('.close-btn').click(function() {
        $('.popup').hide();
    });
}