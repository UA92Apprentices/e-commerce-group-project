function handleScroll() {
  var mybutton = document.getElementById("my-btn");

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

// Add a scroll event listener to handle scroll detection
window.onscroll = function () {
  handleScroll();
};

// Scroll to product section

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
});

function toggleDropdown() {
  var dropdown = document.getElementById("myDropdown");
  var menuIcon = document.getElementById("menuIcon");
  dropdown.classList.toggle("show");
  // Toggle between hamburger and close icon
  if (dropdown.classList.contains("show")) {
    menuIcon.src = "/assets/icons/Close_icon.webp";
    menuIcon.alt = "Close";
  } else {
    menuIcon.src = "/assets/icons/Hamburger_icon.svg";
    menuIcon.alt = "Menu";
  }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches("#menuIcon")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
        // Reset icon to hamburger when dropdown is closed
        var menuIcon = document.getElementById("menuIcon");
        menuIcon.src = "/assets/icons/Hamburger_icon.svg";
        menuIcon.alt = "Menu";
      }
    }
  }
};
