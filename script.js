const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

const navLinkItems = document.querySelectorAll(".nav-links a");

function setMenu(isOpen) {
  navLinks.classList.toggle("open", isOpen);

  menuToggle.setAttribute("aria-expanded", isOpen);

  menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.contains("open");

    setMenu(!isOpen);
  });

  navLinkItems.forEach((link) => {
    link.addEventListener("click", () => {
      setMenu(false);
    });
  });
}
