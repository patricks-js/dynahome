// Window width

const windowSize = window.screen.width;

const createLogoName = () => {
  const logoContainer = document.querySelector(
    "#header .header__container__logo"
  );
  const span = document.createElement("span");
  span.innerHTML = "Dynahash";

  logoContainer.append(span);
};

const centerLogoImage = () => {
  const headerContainer = document.querySelector("#header .header__container");
  const span = document.createElement("span");
  const span2 = document.createElement("span");

  headerContainer.prepend(span);
  headerContainer.insertBefore(span2, navbar);
};

if (windowSize > 500) {
  createLogoName();
} else {
  centerLogoImage();
}

// Window height

// const header = document.querySelector("#header");

// const sections = document.querySelectorAll("#main section");
// const firstSection = sections.item(0);

// window.addEventListener("scroll", () => {
//   if (window.screenY > firstSection) {
//     header.classList.add("transparent");
//   }
// });
