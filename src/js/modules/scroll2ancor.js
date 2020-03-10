module.exports = function() {

  // begin scroll 2 ancore desktop menu
  $(function() {
    $('.scroll-link[href*=\\#]').on("click", function(e){
       // e.preventDefault();
       var anchor = $(this);
       $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - 0 + 'px'
       }, 1000);
    });
    return false;
  });
  // end scroll 2 ancore desktop menu

};