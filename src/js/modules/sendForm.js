module.exports = function() {

  $("#popup-form").submit(function () {
    var contract = $('.popup-form__input--contract');
    var name = $('.popup-form__input--name');
    var secondName = $('.popup-form__input--secondName');
    var phone = $('.popup-form__input--phone');
    var email = $('.popup-form__input--email');

    var checkboxSale = $('.popup-form__checkbox--sale');
    var checkboxPersonal = $('.popup-form__checkbox--personal');
    var customCheckboxSale = $('.popup-form__custom-checkbox--sale');
    var customCheckboxPersonal = $('.popup-form__custom-checkbox--personal');

    if ($(contract).val() === '') {
      $(contract).addClass('error');
      $(contract).parents().addClass('error');
      return false
    } else {
      $(contract).removeClass('error');
      $(contract).parents().removeClass('error');
    }

    if ($(name).val() === '' || /\d/ig.test($(name).val())) {
      $(name).addClass('error');
      $(name).parents().addClass('error');
      return false
    } else {
      $(name).removeClass('error');
      $(name).parents().removeClass('error');
    }

    if ($(secondName).val() === '' || /\d/ig.test($(secondName).val())) {
      $(secondName).addClass('error');
      $(secondName).parents().addClass('error');
      return false
    } else {
      $(secondName).removeClass('error');
      $(secondName).parents().removeClass('error');
    }

    if ($(phone).val() === '') {
      $(phone).addClass('error');
      $(phone).parents().addClass('error');
      return false
    } else {
      $(phone).removeClass('error');
      $(phone).parents().removeClass('error');
    }

    if ( !/@/ig.test($(email).val())) {
      $(email).addClass('error');
      $(email).parents().addClass('error');
      return false
    } else {
      $(email).removeClass('error');
      $(email).parents().removeClass('error');
    }

    if (!$(checkboxSale).prop('checked')) {
      $(customCheckboxSale).addClass('error');
      return false;
    } else {
      $(customCheckboxSale).removeClass('error');
    }

    if (!$(checkboxPersonal).prop('checked')) {
      $(customCheckboxPersonal).addClass('error');
      return false;
    } else {
      $(customCheckboxPersonal).removeClass('error');
    }



    $.ajax({
      type: "POST",
      url: "assets/php/form.php",
      data: $(this).serialize()
    }).done(function () {
      $('#popup-form')[0].reset();
      $('#popup').fadeOut();
      $('#thnx').fadeIn();
    });
    return false;
  });

};