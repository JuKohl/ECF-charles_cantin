$(document).ready(function () {
  $(".filter-button").click(function () {
    var target = $(this).data("target");
    $(".category-carousel").hide();
    $("#" + target).show();
    });
  });
