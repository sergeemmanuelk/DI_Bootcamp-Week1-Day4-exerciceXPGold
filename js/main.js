$(window).scroll(function () {
    $scroll = $(window).scrollTop();
    
    if ($scroll > 0) {
        $('#navbar').css('background', "#212529");
    } else {
        $('#navbar').css('background', 'transparent');
    }
});