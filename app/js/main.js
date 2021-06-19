$(function(){
  $('.reviews__list').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.svg" alt="arrow left"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg" alt="arrow right"></button>',
    responsive: [
    {
      breakpoint: 1361,
      settings: {
        arrows: false,
        dots: true
      }
    },
    {
      breakpoint: 1180,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        centerMode: true
      }
    },
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        centerMode: true
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        centerMode: false
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        centerMode: false
      }
    }
    ]
  });
  $('.question-answer__item-trigger').on('click', function(){
    $(this).next('.question-answer__item-content').slideToggle(300);
    });
  $(".main-btn").click(function(){
    $(".popup").fadeIn();
  });
  $(".popup_close").click(function(){
    $(".popup").fadeOut();
  });
  $(".popup").click(function(e){
    if(e.target === this){
      $(".popup").fadeOut();
    }
  });

  $(".send_mail_form").submit(function() {
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: th.serialize()
    }).done(function() {
      $(".popup").fadeOut();
    });
    return false;
  });
});






