// Get the scroll container element
var container = document.getElementsByClassName("scroll-container")[0];

// Define a function to scroll left by 100 pixels
function scrollLeft() {
  container.scrollBy(-100, 0);
}

// Define a function to scroll right by 100 pixels
function scrollRight() {
  container.scrollBy(100, 0);
}
