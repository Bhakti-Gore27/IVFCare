const menuOverlay = document.getElementById("menuOverlay");

// Mobile Menu Elements
const openMobileMenu = document.getElementById("openMobileMenu");
const closeMobileMenu = document.getElementById("closeMobileMenu");
const mobileMenu = document.getElementById("mobileMenu");

// Right Sidebar Elements
const openRightSidebar = document.getElementById("openRightSidebar");
const closeRightSidebar = document.getElementById("closeRightSidebar");
const rightSidebar = document.getElementById("rightSidebar");

// Check if elements exist before adding event listeners
if (openMobileMenu && closeMobileMenu && mobileMenu) {
  openMobileMenu.addEventListener("click", () => openSidebar(mobileMenu));
  closeMobileMenu.addEventListener("click", closeAllSidebars);
}

if (openRightSidebar && closeRightSidebar && rightSidebar) {
  openRightSidebar.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent any default behavior
    openSidebar(rightSidebar);
  });
  closeRightSidebar.addEventListener("click", closeAllSidebars);
}

if (menuOverlay) {
  menuOverlay.addEventListener("click", closeAllSidebars);
}

// Functions
function openSidebar(element) {
  if (element) {
    element.classList.add("active");
    menuOverlay.classList.add("active");
    // Prevent body scrolling when sidebar is open
    document.body.style.overflow = "hidden";
  }
}

function closeAllSidebars() {
  if (mobileMenu) mobileMenu.classList.remove("active");
  if (rightSidebar) rightSidebar.classList.remove("active");
  if (menuOverlay) menuOverlay.classList.remove("active");
  // Restore body scrolling
  document.body.style.overflow = "";
}