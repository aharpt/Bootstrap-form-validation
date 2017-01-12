// when the button is clicked
  // if email is not longer than one character throw an error
  // if email is not formatted like an email throw an error
  // if Password if not longer than six characters throw an error

// if email is not longer than one character throw an error

// Using a regular expression in JavaScript http://stackoverflow.com/questions/46155/validate-email-address-in-javascript Stack Overflow MIT License
var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

$(".btn-default").click(function (event) {
  "use strict";
  if ($("#inputEmail3").val().length < 1) {
    event.preventDefault();
    $("#email-label").parent(".form-group").addClass("has-error");
    $("#email-label").next(".col-sm-10").append("<span class='error-message'>Your provided email is not the required length.</span>");
    console.log("#email-label length less than 1");
  } else if (!re.test($("#inputEmail3").val())) {
    event.preventDefault();
    $("#email-label").parent(".form-group").addClass("has-error");
    $("#email-label").next(".col-sm-10").append("<span class='error-message'>Your provided email is not formatted like an email.</span>");
    console.log("#email-label is not formatted like an email");
  }
  console.log("button default clicked");
});


  $("#inputEmail3").keyup( function (event) {
    "use strict";
    if ($("#email-label").parent(".form-group").hasClass("has-error")) {

      if ($("#inputEmail3").val().length < 1 && !re.test($("#inputEmail3").val())) {
        event.preventDefault();
        $("#email-label").parent(".form-group").removeClass("has-error has-success").addClass("has-error");
        $("#email-label").next(".col-sm-10").children("span").remove();
        $("#email-label").next(".col-sm-10").append("<span class='error-message'>Your provided email is not the required length.</span>");
        console.log("#email-label length less than 1 character on keyup");

      } else if ($("#inputEmail3").val().length > 0 && !re.test($("#inputEmail3").val())) {
        event.preventDefault();
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

$(".btn-default").click(function (event) {
  "use strict";
  if ($("#inputPassword3").val().length < 6) {
    event.preventDefault();
    $("#password-label").parent(".form-group").addClass("has-error");
    $("#password-label").next(".col-sm-10").append("</span><span class='error-message'>Please type in a password that is longer than five characters.</span>");
    console.log("#password-label length less than 6");
  }
  console.log("button default for password input is clicked");
});


  $("#inputPassword3").keyup( function (event) {
    "use strict";
    if ($("#password-label").parent(".form-group").hasClass("has-error")) {
      if ($("#inputPassword3").val().length < 6) {
        event.preventDefault();
        $("#password-label").parent(".form-group").addClass("has-error");
        $("#password-label").next(".col-sm-10").children(".error-message").remove();
        $("#password-label").next(".col-sm-10").append("</span><span class='error-message'>Please type in a password that is longer than five characters.</span>");
        console.log("#password-label length less than 6 characters for keyup");
      }
      if ($("#inputPassword3").val().length > 5) {
        $("#password-label").parent(".form-group").removeClass("has-error");
        $("#password-label").parent(".form-group").addClass("has-success");
        $("#password-label").next(".col-sm-10").children(".error-message").remove();
        console.log("keyup removing has-error class and adding has-success for password. Also removing .error-message");
      }
    }
  });


  // if all checks are successful, "gray" out the body and alert success message
  // $("body").append("<div id='overlay'></div>");
  //
  // $(".btn-default").click(function () {
  //   console.log("alert button clicked");
  //   if (!$("#email-label").parent(".form-group").hasClass("has-error") && !$("#password-label").parent(".form-group").hasClass("has-error")) {
  //     $("#overlay").append("<div class='alert alert-success' role='alert'>Congratulations! You have successfully signed in!</div>").show();
  //     console.log("alert");
  //   }
  // });
  //
  // $("#overlay").click( function () {
  //   $("#overlay").hide();
  // });
