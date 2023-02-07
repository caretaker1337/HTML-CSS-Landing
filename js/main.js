window.onload = () => {
  const menuLinks = document.querySelectorAll(".header__menu__link");

  for (const link of menuLinks) {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const id = event.currentTarget.getAttribute("href").replace("#", "");
      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  }
};
