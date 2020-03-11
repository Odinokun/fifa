module.exports = function() {

  // begin popup open
  $('.popup-open').on('click', function() {
    $('.popup').fadeIn();
  });
  $('.popup__close').on('click', function() {
    $('.popup').fadeOut();
  });


  // end popup open
};