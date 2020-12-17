window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  let windowPosition = window.scrollY > 0;
  header.classList.toggle("scrolling-active", windowPosition);
});
document.querySelector("button").addEventListener("click", function () {
  let header = document.querySelector("header");
  header.classList.toggle("toggle-active");
});

// Login

document.querySelector(".top-most-cta").addEventListener("click", function () {
  $(".login-popup").fadeIn("1000");
});

// Login Ends

document
  .querySelector(".signupbtn-login")
  .addEventListener("click", function () {
    $(".login-popup").fadeOut("800");
    $(".signup-popup").fadeIn("1000");
  });

document
  .querySelector(".loginbtn-signup")
  .addEventListener("click", function () {
    $(".signup-popup").fadeOut("800");
    $(".login-popup").fadeIn("1000");
  });

// Product-view

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
    // Office furns
    case "Office Desk":
      $(".product-view-row-3").fadeIn("1000");
      break;

    case "Multipurpose Shelves":
      $(".product-view-row-3").fadeIn("1000");
      break;

    case "Comfortable Chair":
      $(".product-view-row-3").fadeIn("1000");
      break;

    case "Writing Table":
      $(".product-view-row-4").fadeIn("1000");
      break;

    case "Cool Clocks":
      $(".product-view-row-4").fadeIn("1000");
      break;

    case "Desk Figurines":
      $(".product-view-row-4").fadeIn("1000");
      break;

    default:
      break;
  }
}

// Product-View Ends

//  Close btn of all Popup

$(document).ready(function () {
  $(".close-btn").click(function () {
    var $closebtn = $(this).parent();
    $($closebtn).fadeOut("800");
  });
});

// Scroll-Fix

function offsetAnchor() {
  if (location.hash.length !== 0) {
    window.scrollTo(window.scrollX, window.scrollY - 80);
  }
}

// Captures click events of all <a> elements with href starting with #
$(document).on("click", 'a[href^="#"]', function (event) {
  // Click events are captured before hashchanges. Timeout
  // causes offsetAnchor to be called after the page jump.
  window.setTimeout(function () {
    offsetAnchor();
  }, 0);
});

// Set the offset when entering page with hash present in the url
window.setTimeout(offsetAnchor, 0);

// Scroll-Fix End

// Contact-us

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
