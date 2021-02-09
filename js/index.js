$(document).ready(function(){
  $('.carousel').slick({
    slidesToShow: 1,
    dots:true,
    centerMode: true,
    arrows: true,
    centerPadding: "0px",
    infinite: true
  });
  $('.js-logo').click(function() {
    $(".header-mob").toggleClass("open")
  })

});
