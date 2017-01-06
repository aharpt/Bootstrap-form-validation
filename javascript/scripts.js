// when the button is clicked
  // if email is not longer than one character throw an error
  // if email is not formatted like an email throw an error
  // if Password if not longer one character throw an error


$(".btn-default").click(function () {
  "use strict";
  if ($("#email-label").val().length < 1) {
    $("#email-label").parent(".form-group").addClass("has-error");
    $("#email-label").next(".col-sm-10").append("<span class='error-message'>Your provided email is not the required length. Please try again.</span>");
    console.log("#email-label length less than 1");
  }
  console.log("button default clicked");
});
