// when the button is clicked
  // if email is not longer than one character throw an error
  // if email is not formatted like an email throw an error
  // if Password if not longer than six characters throw an error

// if email is not longer than one character throw an error

// Using a regular expression in JavaScript http://stackoverflow.com/questions/46155/validate-email-address-in-javascript Stack Overflow MIT License
var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

$(".btn-default").click(function () {
  "use strict";
  if ($("#inputEmail3").val().length < 1) {
    $("#email-label").parent(".form-group").addClass("has-error");
    $("#email-label").next(".col-sm-10").append("<span class='error-message'>Your provided email is not the required length.</span>");
    console.log("#email-label length less than 1");
  } else if (!re.test($("#inputEmail3").val())) {
    $("#email-label").parent(".form-group").addClass("has-error");
    $("#email-label").next(".col-sm-10").append("<span class='error-message'>Your provided email is not formatted like an email.</span>");
    console.log("#email-label is not formatted like an email");
  }
  console.log("button default clicked");
});


  $("#inputEmail3").keyup( function () {
    "use strict";
    if ($("#email-label").parent(".form-group").hasClass("has-error")) {
      if ($("#inputEmail3").val().length > 0 && !re.test($("#inputEmail3").val())) {
        $("#email-label").next(".col-sm-10").children(".error-message").text("Your provided email is not formatted like an email.");
        console.log("keyup changing error-message text");
      } else if ($("#inputEmail3").val().length > 0 && re.test($("#inputEmail3").val())) {
        $("#email-label").parent(".form-group").removeClass("has-error");
        $("#email-label").parent(".form-group").addClass("has-success");
        $("#email-label").next(".col-sm-10").children(".error-message").remove();
        console.log("keyup removing has-error class and adding has-success. Also removing .error-message");
      }
    }
  });


// if Password if not longer than six characters throw an error

$(".btn-default").click(function () {
  "use strict";
  if ($("#inputPassword3").val().length < 6) {
    $("#password-label").parent(".form-group").addClass("has-error");
    $("#password-label").next(".col-sm-10").append("</span><span class='error-message'>Please type in a password that is longer than five characters.</span>");
    console.log("#password-label length less than 1");
  }
  console.log("button default for password input is clicked");
});


  $("#inputPassword3").keyup( function () {
    "use strict";
    if ($("#password-label").parent(".form-group").hasClass("has-error")) {
      if ($("#inputPassword3").val().length > 5) {
        $("#password-label").parent(".form-group").removeClass("has-error");
        $("#password-label").parent(".form-group").addClass("has-success");
        $("#password-label").next(".col-sm-10").children(".error-message").remove();
        console.log("keyup removing has-error class and adding has-success for password. Also removing .error-message");
      }
    }
  });
