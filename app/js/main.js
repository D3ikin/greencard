$(function(){
  $('.question-answer__item-trigger').on('click', function(){
    $(this).next('.question-answer__item-content').slideToggle(300);
  });
});