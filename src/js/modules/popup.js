module.exports = function() {

  // begin popup open
  $('.popup-open').on('click', function() {
    $('.popup').fadeIn();
    $('#index, #second').fadeOut(0);
  });
  // end popup open
};