// when the button is clicked
  // if email is not formatted like an email throw an error
  // if Password if not longer than five characters throw an error


// Using a regular expression in JavaScript http://stackoverflow.com/questions/46155/validate-email-address-in-javascript Stack Overflow MIT License
var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
var numOfClicks = 0;

$(function() {

  var $btn = $(".btn");
  var $inputEmail = $("#inputEmail");
  var $emailLabel = $("#email-label");
  var $inputPassword = $("#inputPassword");
  var $passwordLabel = $("#password-label");
  var $inputConfirmPassword = $("#inputConfirmPassword");
  var $confirmPasswordLabel = $("#confirm-password-label");


$btn.click( function (event) {
  "use strict";
  if (!re.test($inputEmail.val())) {
    event.preventDefault();
    $emailLabel.parent(".form-group").removeClass("has-error has-success has-feedback").addClass("has-error has-feedback");
    $emailLabel.next(".col-sm-10").children(".error-message").remove();
    $emailLabel.next(".col-sm-10").append("<span class='glyphicon glyphicon-remove form-control-feedback' aria-hidden='true'></span>");
    $emailLabel.next(".col-sm-10").append("<span class='error-message'>Please provide a valid email</span>");
  }
});

  $inputEmail.blur( function () {
    if ($inputEmail.val().length > 0 && re.test($inputEmail.val())) {
      $emailLabel.parent(".form-group").removeClass("has-error has-success has-feedback").addClass("has-success has-feedback");
      $emailLabel.next(".col-sm-10").children("span").remove();
      $emailLabel.next(".col-sm-10").append("<span class='glyphicon glyphicon-ok form-control-feedback' aria-hidden='true'></span>");
    } else {
      $emailLabel.parent(".form-group").removeClass("has-error has-success has-feedback").addClass("has-error has-feedback");
      $emailLabel.next(".col-sm-10").children("span").remove();
      $emailLabel.next(".col-sm-10").append("<span class='glyphicon glyphicon-remove form-control-feedback' aria-hidden='true'></span>");
      $emailLabel.next(".col-sm-10").append("<span class='error-message'>Please provide a valid email</span>");
    }
  });


// if Password if not longer than six characters throw an error

$btn.click( function (event) {
  "use strict";
  if ($inputPassword.val().length < 6) {
    event.preventDefault();
    $passwordLabel.parent(".form-group").removeClass("has-error has-success has-feedback").addClass("has-error has-feedback");
    $passwordLabel.next(".col-sm-10").children("span").remove();
    $passwordLabel.next(".col-sm-10").append("<span class='glyphicon glyphicon-remove form-control-feedback' aria-hidden='true'></span>");
    $passwordLabel.next(".col-sm-10").append("<span class='error-message'>Please provide a password that is longer than five characters.</span>");
  }
});


$inputPassword.blur( function () {
  "use strict";
  if ($inputPassword.val().length > 5) {
    $passwordLabel.parent(".form-group").removeClass("has-error has-success has-feedback").addClass("has-success has-feedback");
    $passwordLabel.next(".col-sm-10").children("span").remove();
    $passwordLabel.next(".col-sm-10").append("<span class='glyphicon glyphicon-ok form-control-feedback' aria-hidden='true'></span>");
  } else {
    $passwordLabel.parent(".form-group").removeClass("has-error has-success has-feedback").addClass("has-error has-feedback");
    $passwordLabel.next(".col-sm-10").children("span").remove();
    $passwordLabel.next(".col-sm-10").append("<span class='glyphicon glyphicon-remove form-control-feedback' aria-hidden='true'></span>");
    $passwordLabel.next(".col-sm-10").append("<span class='error-message'>Please provide a password that is longer than five characters.</span>");
  }
});


  // confirm password

  $btn.click( function (event) {
    "use strict";
    if ($inputConfirmPassword.val() !== $inputPassword.val() || $inputPassword.val().length === 0) {
      event.preventDefault();
      $confirmPasswordLabel.parent(".form-group").removeClass("has-error has-success has-feedback").addClass("has-error has-feedback");
      $confirmPasswordLabel.next(".col-sm-10").children("span").remove();
      $confirmPasswordLabel.next(".col-sm-10").append("<span class='glyphicon glyphicon-remove form-control-feedback' aria-hidden='true'></span>");
      $confirmPasswordLabel.next(".col-sm-10").append("<span class='error-message'>Please type in a matching password.</span>");
      console.log("Hello World");
    }
  });

  $inputConfirmPassword.blur( function () {
    if ($inputConfirmPassword.val() === $inputPassword.val() && $inputPassword.val().length > 0) {
      $confirmPasswordLabel.parent(".form-group").removeClass("has-error has-success has-feedback").addClass("has-success has-feedback");
      $confirmPasswordLabel.next(".col-sm-10").children("span").remove();
      $confirmPasswordLabel.next(".col-sm-10").append("<span class='glyphicon glyphicon-ok form-control-feedback' aria-hidden='true'></span>");
    } else {
      $confirmPasswordLabel.parent(".form-group").removeClass("has-error has-success has-feedback").addClass("has-error has-feedback");
      $confirmPasswordLabel.next(".col-sm-10").children("span").remove();
      $confirmPasswordLabel.next(".col-sm-10").append("<span class='glyphicon glyphicon-remove form-control-feedback' aria-hidden='true'></span>");
      $confirmPasswordLabel.next(".col-sm-10").append("<span class='error-message'>Please type in a matching password.</span>");
    }
  });

  $inputPassword.keyup(function (event) {
    "use strict";
    event.preventDefault();
    if ($inputConfirmPassword.val() !== $inputPassword.val()) {
      $confirmPasswordLabel.parent(".form-group").removeClass("has-error has-success has-feedback").addClass("has-error has-feedback");
      $confirmPasswordLabel.next(".col-sm-10").children("span").remove();
      $confirmPasswordLabel.next(".col-sm-10").append("<span class='glyphicon glyphicon-remove form-control-feedback' aria-hidden='true'></span>");
      $confirmPasswordLabel.next(".col-sm-10").append("<span class='error-message'>Please type in a matching password.</span>");
    }
  });

  $inputConfirmPassword.keyup(function (event) {
    "use strict";
    event.preventDefault();
    if ($inputConfirmPassword.val() === $inputPassword.val()) {
      $confirmPasswordLabel.parent(".form-group").removeClass("has-error has-success has-feedback").addClass("has-success has-feedback");
      $confirmPasswordLabel.next(".col-sm-10").children("span").remove();
      $confirmPasswordLabel.next(".col-sm-10").append("<span class='glyphicon glyphicon-ok form-control-feedback' aria-hidden='true'></span>");
    }
  });

});
