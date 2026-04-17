export function navbarToggle() {
  const logo = document.getElementById("nonToggledNavbarLogo");
  if (logo) {
    logo.style.display = "none";
  }
}

export function onLoadNav() {
  const logo = document.getElementById("nonToggledNavbarLogo");
  const toggler = document.querySelector(".navbar-toggler");

  if (!logo || !toggler) {
    return () => {};
  }

  const syncLogoVisibility = () => {
    const isTogglerHidden = window.getComputedStyle(toggler).display === "none";
    logo.style.display = isTogglerHidden ? "block" : "none";
  };

  syncLogoVisibility();
  window.addEventListener("resize", syncLogoVisibility);

  return () => {
    window.removeEventListener("resize", syncLogoVisibility);
  };
}
