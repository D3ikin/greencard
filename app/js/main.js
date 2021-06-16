// let arr = [
//   {name:"Толик",      review:"1"},
//   {name:"Андрей",     review:"2"},
//   {name:"Дмитрий",    review:"3"},
//   {name:"Дмитрий",    review:"4"}
// ]
// let index_counter = 3
// if(window.outerWidth < 1200 && window.outerWidth > 600){
//   index_counter = 2
// }else if(window.outerWidth <= 600){
//   index_counter = 1
// }
// function setItem(obj, ident){
//   let html = `<li class="reviews__list-item">
//             <p class="reviews__item-name">${obj.name}</p>
//             <p class="reviews__item-text">${obj.review}</p>
//             <div style="display: none" class="ident">${ident}</div>
//           </li>`
//   return html
// }
// function changeSlides(type = true){
//   if(arr.length > index_counter) {
//     clearInterval(interval)
//     interval = setInterval(changeSlides, 10000)
//     let items = $(".reviews__list-item")
//     let ind_arr = []
//     items.each(function () {
//       let ident = parseInt($(this).find(".ident").text())
//       ind_arr.push(ident)
//     })
//     ind_arr.forEach(function (item, index, array) {
//       if (type) {
//         let i = item + array.length
//         if (i >= arr.length) {
//           i = i - arr.length
//         }
//         array[index] = i
//       } else {
//         let i = item - array.length
//         if (i < 0) {
//           i = arr.length + i
//         }
//         array[index] = i
//       }
//     })
//     let each_index = 0
//     items.fadeOut(300, null, function () {
//       let item = arr[ind_arr[each_index]]
//       $(this).find(".reviews__item-name").text(item.name)
//       $(this).find(".reviews__item-text").text(item.review)
//       $(this).find(".ident").text(ind_arr[each_index])
//       each_index++
//     })
//     items.fadeIn(300)
//   }
// }
// let interval
// if(arr.length > index_counter){
//   interval = setInterval(changeSlides, 10000)
// }
$(function(){
  $('.reviews__list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
  // let list = $(".reviews__list")
  // for(let i=0;i<index_counter;i++){
  //   list.append(setItem(arr[i], i))
  // }
  // $('.left_button').click(() => changeSlides(false))
  // $('.right_button').click(() => changeSlides(true))
  $('.question-answer__item-trigger').on('click', function(){
    $(this).next('.question-answer__item-content').slideToggle(300);
    });
  $(".main-btn").click(function(){
    $(".popup").fadeIn()
  })
  $(".popup_close").click(function(){
    $(".popup").fadeOut()
  })
  $(".popup").click(function(e){
    if(e.target === this){
      $(".popup").fadeOut()
    }
  })
  $(".send_mail_form").submit(function() {
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: th.serialize()
    }).done(function() {
      $(".popup").fadeOut()
    });
    return false;
  });
});



// $(function(){
// //   $(window).on('load resize', function() {
// //   if ($(window).width() < 1024) {
// //     $('.header__offer-list').slick({
// //       buttons: false,
// //       infinite: false,
// //       centerMode: true,
// //       speed: 200,
// //       lazyLoad: 'ondemand',
// //       variableWidth: true,
// //       slidesToScroll: 1,
// //       slidesToShow: 1
// //     });
// //   } else {
// //     $('.header__offer-list').slick('unslick');
// //   }
// // });
  
//   $('.question-answer__item-trigger').on('click', function(){
//     $(this).next('.question-answer__item-content').slideToggle(300);
//   });
// });


