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
function validation() {
  var name = document.getElementById("name").value;
  var mobileNo = document.getElementById("mobile no.").value;
  var emailAddress = document.getElementById("email address").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message").value;
  var text;
  error_message.style.padding = "10px";
  if (name.length < 5) {
    text = "Please Enter Valid Name";
    error_message.innerHTML = "text";
    return false;
  }
  if (isNaN(mobileNo) || mobileNo.length != 10) {
    text = "Please Enter Valid Mobile No.";
    error_message.innerHTML = "text";
    return false;
  }
  if (emailAddress.indexOf("@") == -1 || emailAddress.length < 6) {
    text = "Please Enter Valid Email";
    error_message.innerHTML = "text";
    return false;
  }
  if (message.length <= 100) {
    text = "Please Enter More Than 100 Characters";
    error_message.innerHTML = "text";
    return false;
  }
  alert("Form Submitted Sucessfully");
  return true;
}
