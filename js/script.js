scrollHandler();

function scrollHandler() {
    if($(window).scrollTop() >= $('.about').position().top) {
        $('.menu-right button').css('color', '#4A4A4A');
    } else {
        $('.menu-right button').css('color', 'white');
    }

    $('section').each(function() {
      if($(window).scrollTop() >= $(this).position().top) {
        $(this).find('.vertical-center').animate({top: '0', opacity: '1'}, 800);
      }  
    });

    if($('.about').offset().top <= $(window).scrollTop()){
    $('.inner-bar').each(function(){
      var percent = $(this).siblings('.percentage').text();
      $(this).animate({width: percent },1500);
    });
  }
}

$(window).on('scroll', scrollHandler);

$('#about-btn').on('click', function() {
    $('html, body').animate({scrollTop : $('.about').position().top}, 500);
});

$('#contact-btn').on('click', function() {
    $('html, body').animate({scrollTop : $('.contact').position().top}, 500);
});