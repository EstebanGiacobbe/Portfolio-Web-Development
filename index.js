// scroll animation js
AOS.init();

// cursor custom
new kursor({

  type: 1,
  removeDefaultCursor: true,
  color: '#f2efe8'
});

// my js
$("span").click(function() {

  $('.container-intro').slideUp(1650, function() {
    // $(this).remove();
    $('container-intro').addClass('hidden');
  });
  $('.container-intro').addClass("animate__backOutUp");
  // $('container-intro').remove();
  $('.hidden').removeClass("hidden");
  // $('.title').addClass("fade-animation");

});

$(".circle-menu").click(function() {

  $(".sidebar").toggleClass('change');

});


$(window).scroll(function() {

  $("#min").addClass('min-rotate');

});
