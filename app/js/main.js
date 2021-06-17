$(function(){
  $(window).on('load resize', function() {
    if ($(window).width() < 1025) {
      $('.header__offer-list').slick({
        arrows: false,
        dots: true,
        centerMode: true,
        variableWidth: true,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 1
      });
    } else {
      $('.header__offer-list').slick('unslick');
    }
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




