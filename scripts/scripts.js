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
      behavior: "smooth",
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
