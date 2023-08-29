// The dropdown and it's contents elements
const dropdownContent = document.querySelector(".dropdown");
const dropdown = document.getElementById("discdropdown");

// Variable to store the timeout
let timeout;

// Function to show the dropdown content
function showDropdownContent() {
  dropdownContent.style.display = "block";
}

// Function to hide the dropdown content
function hideDropdownContent() {
  dropdownContent.style.display = "none";
}

// For mouse leaving the dropdown, setting timer
dropdown.addEventListener("mouseleave", () => {
  showDropdownContent();
  timeout = setTimeout(hideDropdownContent, 200);
});

// For mouse entering the dropdown, showing dropdown and resetting timer
dropdown.addEventListener("mouseenter", function () {
  showDropdownContent();
  clearTimeout(timeout);
});
