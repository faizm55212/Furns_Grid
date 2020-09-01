window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  let windowPosition = window.scrollY > 0;
  header.classList.toggle("scrolling-active", windowPosition);
});
document.querySelector("button").addEventListener("click", function () {
  let header = document.querySelector("header");
  header.classList.toggle("toggle-active");
});

var noOfProducts = document.querySelectorAll(".card-img-top").length;

for (i = 0; i < noOfProducts; i++) {
  document
    .querySelectorAll(".card-img-top")
    [i].addEventListener("click", function () {
      let product = this.nextElementSibling.querySelectorAll("h5")[0].innerHTML;
      ModalPopup(product);
    });
}
function ModalPopup(product) {
  switch (product) {
    case "Double Bed":
      $(".product-view-row-1").fadeIn("1000");
      break;

    case "Single Bed":
      $(".product-view-row-1").fadeIn("1000");
      break;

    case "Coffee Table":
      $(".product-view-row-1").fadeIn("1000");
      break;

    case "Sofa":
      $(".product-view-row-2").fadeIn("1000");
      break;

    case "Bedside Table":
      $(".product-view-row-2").fadeIn("1000");
      break;

    case "Chair":
      $(".product-view-row-2").fadeIn("1000");
      break;

    default:
      break;
  }
}

$(document).ready(function () {
  $(".close-btn").click(function () {
    var $closebtn = $(this).parent();
    $($closebtn).fadeOut("800");
  });
});
