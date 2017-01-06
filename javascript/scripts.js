$(".btn-primary").click(function () {
  "use strict";
  if ($("label").val().length < 1) {
    $(".form-group").addClass("has-success");
  }
});
