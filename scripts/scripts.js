function handleScroll() {
  var mybutton = document.getElementById("myBtn");

  // Show the button when scrolling down, hide when scrolling up
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Function to scroll to the top of the page smoothly
function topFunction() {
  // Check if the 'scroll-behavior' CSS property is supported
  if ("scrollBehavior" in document.documentElement.style) {
    // Use native smooth scrolling
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  } else {
    // Scroll to the top for browsers that do not support smooth scrolling
    window.scrollTo(0, 0);
  }
}

// Add a scroll event listener to handle scroll detection
window.onscroll = function () {
  handleScroll();
};

// Cookie Banner

document.addEventListener("DOMContentLoaded", function () {
  var cookieBanner = document.getElementById("cookie-banner");
  var acceptCookiesButton = document.getElementById("accept-cookies");
  var rejectCookiesButton = document.getElementById("reject-cookies");

  function hideCookieBanner() {
    // Add a class to make the banner invisible
    cookieBanner.classList.add("opacity-0");
    // After the transition duration, remove the banner from the DOM
    setTimeout(function () {
      cookieBanner.style.display = "none";
    }, 500); // 500 is the duration of the opacity transition
  }

  acceptCookiesButton.addEventListener("click", hideCookieBanner);
  rejectCookiesButton.addEventListener("click", hideCookieBanner);

  setTimeout(function () {
    // Add a class to make the banner visible after 5 seconds
    cookieBanner.classList.add("opacity-100");
  }, 5000);
});
