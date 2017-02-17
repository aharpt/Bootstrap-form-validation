// when the button is clicked
  // if email is not longer than one character throw an error
  // if email is not formatted like an email throw an error
  // if Password if not longer than six characters throw an error

// if email is not longer than one character throw an error

// Using a regular expression in JavaScript http://stackoverflow.com/questions/46155/validate-email-address-in-javascript Stack Overflow MIT License
var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
var numOfClicks = 0;

$(function() {

$(".btn").click( function (event) {
  "use strict";
  if (!re.test($("#inputEmail").val())) {
    event.preventDefault();
    $("#email-label").parent(".form-group").removeClass("has-error has-success has-feedback").addClass("has-error has-feedback");
    $("#email-label").next(".col-sm-10").children(".error-message").remove();
    $("#email-label").next(".col-sm-10").append("<span class='glyphicon glyphicon-remove form-control-feedback' aria-hidden='true'></span>");
    $("#email-label").next(".col-sm-10").append("<span class='error-message'>Please provide a valid email</span>");
  }
});

  $("#inputEmail").blur( function () {
    if ($("#inputEmail").val().length > 0 && re.test($("#inputEmail").val())) {
      $("#email-label").parent(".form-group").removeClass("has-error has-success has-feedback").addClass("has-success has-feedback");
      $("#email-label").next(".col-sm-10").children("span").remove();
      $("#email-label").next(".col-sm-10").append("<span class='glyphicon glyphicon-ok form-control-feedback' aria-hidden='true'></span>");
    } else {
      $("#email-label").parent(".form-group").removeClass("has-error has-success has-feedback").addClass("has-error has-feedback");
      $("#email-label").next(".col-sm-10").children("span").remove();
      $("#email-label").next(".col-sm-10").append("<span class='glyphicon glyphicon-remove form-control-feedback' aria-hidden='true'></span>");
      $("#email-label").next(".col-sm-10").append("<span class='error-message'>Please provide a valid email</span>");
    }
  });


// if Password if not longer than six characters throw an error

$(".btn").click( function (event) {
  "use strict";
  if ($("#inputPassword").val().length < 6) {
    event.preventDefault();
    $("#password-label").parent(".form-group").removeClass("has-error has-success has-feedback").addClass("has-error has-feedback");
    $("#password-label").next(".col-sm-10").children("span").remove();
    $("#password-label").next(".col-sm-10").append("<span class='glyphicon glyphicon-remove form-control-feedback' aria-hidden='true'></span>");
    $("#password-label").next(".col-sm-10").append("<span class='error-message'>Please provide a password that is longer than five characters.</span>");
  }
});


$("#inputPassword").blur( function () {
  "use strict";
  if ($("#inputPassword").val().length > 5) {
    $("#password-label").parent(".form-group").removeClass("has-error has-success has-feedback").addClass("has-success has-feedback");
    $("#password-label").next(".col-sm-10").children("span").remove();
    $("#password-label").next(".col-sm-10").append("<span class='glyphicon glyphicon-ok form-control-feedback' aria-hidden='true'></span>");
  } else {
    $("#password-label").parent(".form-group").removeClass("has-error has-success has-feedback").addClass("has-error has-feedback");
    $("#password-label").next(".col-sm-10").children("span").remove();
    $("#password-label").next(".col-sm-10").append("<span class='glyphicon glyphicon-remove form-control-feedback' aria-hidden='true'></span>");
    $("#password-label").next(".col-sm-10").append("<span class='error-message'>Please provide a password that is longer than five characters.</span>");
  }
});


  // confirm password

  $(".btn").click( function (event) {
    "use strict";
    if ($("#inputConfirmPassword").val() !== $("#inputPassword").val() || $("#inputPassword").val().length === 0) {
      event.preventDefault();
      $("#confirm-password-label").parent(".form-group").removeClass("has-error has-success has-feedback").addClass("has-error has-feedback");
      $("#confirm-password-label").next(".col-sm-10").children("span").remove();
      $("#confirm-password-label").next(".col-sm-10").append("<span class='glyphicon glyphicon-remove form-control-feedback' aria-hidden='true'></span>");
      $("#confirm-password-label").next(".col-sm-10").append("<span class='error-message'>Please type in a matching password.</span>");
      console.log("Hello World");
    }
  });

  $("#inputConfirmPassword").blur( function () {
    if ($("#inputConfirmPassword").val() === $("#inputPassword").val() && $("#inputPassword").val().length > 0) {
      $("#confirm-password-label").parent(".form-group").removeClass("has-error has-success has-feedback").addClass("has-success has-feedback");
      $("#confirm-password-label").next(".col-sm-10").children("span").remove();
      $("#confirm-password-label").next(".col-sm-10").append("<span class='glyphicon glyphicon-ok form-control-feedback' aria-hidden='true'></span>");
    } else {
      $("#confirm-password-label").parent(".form-group").removeClass("has-error has-success has-feedback").addClass("has-error has-feedback");
      $("#confirm-password-label").next(".col-sm-10").children("span").remove();
      $("#confirm-password-label").next(".col-sm-10").append("<span class='glyphicon glyphicon-remove form-control-feedback' aria-hidden='true'></span>");
      $("#confirm-password-label").next(".col-sm-10").append("<span class='error-message'>Please type in a matching password.</span>");
    }
  });

  $("#inputPassword").keyup(function (event) {
    "use strict";
    event.preventDefault();
    if ($("#inputConfirmPassword").val() !== $("#inputPassword").val()) {
      $("#confirm-password-label").parent(".form-group").removeClass("has-error has-success has-feedback").addClass("has-error has-feedback");
      $("#confirm-password-label").next(".col-sm-10").children("span").remove();
      $("#confirm-password-label").next(".col-sm-10").append("<span class='glyphicon glyphicon-remove form-control-feedback' aria-hidden='true'></span>");
      $("#confirm-password-label").next(".col-sm-10").append("<span class='error-message'>Please type in a matching password.</span>");
    }
  });

  $("#inputConfirmPassword").keyup(function (event) {
    "use strict";
    event.preventDefault();
    if ($("#inputConfirmPassword").val() === $("#inputPassword").val()) {
      $("#confirm-password-label").parent(".form-group").removeClass("has-error has-success has-feedback").addClass("has-success has-feedback");
      $("#confirm-password-label").next(".col-sm-10").children("span").remove();
      $("#confirm-password-label").next(".col-sm-10").append("<span class='glyphicon glyphicon-ok form-control-feedback' aria-hidden='true'></span>");
    }
  });

});
