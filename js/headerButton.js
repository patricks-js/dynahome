// Menu
const navbar = document.querySelector("#header__container__navbar");
const menuMobile = document.querySelector(".header__container__menu-mobile");

const showMenu = () => {
  navbar.classList.toggle("__--show");
  menuMobile.classList.toggle("__--show");

  const titleMenu = document.createElement("h2");
  titleMenu.classList.add("__--title-menu-mobile");
  titleMenu.innerHTML = "Dynahash";

  const divider = document.createElement("div");
  divider.classList.add("__--divider");

  const titleMenuElement = navbar.querySelector(".__--title-menu-mobile");
  const dividerElement = navbar.querySelector(".__--divider");
  const navigateShow = navbar.getAttribute("class", "__--show");

  if (navigateShow) {
    navbar.prepend(divider);
    navbar.prepend(titleMenu);
  } else if (!navigateShow) {
    setTimeout(() => {
      navbar.removeChild(dividerElement);
      navbar.removeChild(titleMenuElement);
    }, 200);
  }
};

menuMobile.addEventListener("click", () => {
  showMenu();
});
