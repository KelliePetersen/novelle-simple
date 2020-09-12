class MobileMenu {
  constructor() {
    this.menuIcon = document.getElementsByClassName('menu__button');
    this.menu = document.getElementsByClassName('nav__list');
    this.listItem = document.getElementsByClassName('nav__link');
    this.events();
  }
  events() {
    this.menuIcon[0].addEventListener("click", this.toggleMenu.bind(this));
    this.menuIcon[0].addEventListener("click", this.animateMenu.bind(this));
  }
  toggleMenu() {
    this.menu[0].classList.toggle("nav__list--visible");
    Array.from(this.listItem).forEach(function (item) {
      item.classList.toggle("nav__link--visible");
    })
  }
  animateMenu() {
    this.menuIcon[0].classList.toggle("open");
  }
}

export default MobileMenu;
