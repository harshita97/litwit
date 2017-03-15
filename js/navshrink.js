$(window).scroll(function() {
    if ($(document).scrollTop() > 50){
        $('nav').addClass('shrink');
    }
    else{
        $('nav').removeClass('shrink');
    }
});

$(document).ready(function(){
      $('.parallax').parallax();
    });

$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});