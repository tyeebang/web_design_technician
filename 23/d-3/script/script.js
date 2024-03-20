window.onload = function () {
    $('.notice > ul> li:nth-child(1)').click(function () {
        $('.popup').show().css('display', 'flex');
    })

    $('.popup > button').click(function () {
        $('.popup').show().css('display', 'none');
    })

    $(document).ready(function () {
        for (let i = 1; i <= 4; i++) {
            $(`.sub-menu > ul:nth-child(${i}) > li`).hover(function () {
                $(`.main-menu > li:nth-child(${i}) > a`).addClass('aHov');
            }, function () {
                $(`.main-menu > li:nth-child(${i}) > a`).removeClass('aHov');
            });
        }
    });
}