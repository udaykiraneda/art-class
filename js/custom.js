(function($) {

  // Init Wow
  wow = new WOW({
    animateClass: 'animated',
    offset: 100
  });
  wow.init();

  $(".navbar-collapse a").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  // Navigation scrolls
  $('.navbar-nav li a').bind('click', function(event) {
    $('.navbar-nav li').removeClass('active');
    $(this).closest('li').addClass('active');
    var $anchor = $(this);
    var nav = $($anchor.attr('href'));
    if (nav.length) {
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');

      event.preventDefault();
    }
  });


  //jQuery to collapse the navbar on scroll
  $(window).scroll(function() {
    if ($(".navbar-default").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }

  });


  var $form = $('form.contactForm'),
    url = 'https://script.google.com/macros/s/AKfycbzMGPQoEnouUhvehYZ5qkcEV_FLLBrMj6hPLuuWrUh_kqehVl4/exec'

  $form.on('submit', function(e) {
    e.preventDefault();
    $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
      data: $form.serializeArray().reduce((acc, ele)=> {acc[ele.name] = ele.value; return acc;}, {}),
    }).success( ()=>{
      $form[0].reset();
      alert('Thank you, we will get back to you :)');
    });
  });

})(jQuery);
