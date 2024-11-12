$(document).ready(function () {
    $(window).scroll(function () {
        $('.container').each(function () {
            var elementTop = $(this).offset().top;
            var viewportBottom = $(window).scrollTop() + $(window).height();

            if (elementTop < viewportBottom - 50) {
                $(this).addClass('show');
            }
        });
    });
});
