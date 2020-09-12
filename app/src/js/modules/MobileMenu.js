class MobileMenu {
  constructor() {
    this.menu = document.getElementsByClassName('menu__button');
    this.list = document.getElementsByClassName('nav__list');
    this.listItem = document.getElementsByClassName('nav__section');
    this.events();
  }
  events() {
    this.menu[0].addEventListener("click", this.toggleMenu.bind(this));
    this.menu[0].addEventListener("click", this.animateMenu.bind(this));
    Array.from(this.listItem).forEach(item => item.addEventListener("click", this.closeMenu.bind(this)));
  }
  toggleMenu() {
    this.list[0].classList.toggle("nav__list--visible");
  }
  animateMenu() {
    this.menu[0].classList.toggle("open");
  }
  closeMenu() {
    this.menu[0].classList.remove("open");
    this.list[0].classList.toggle("nav__list--visible");
  }
}

export default MobileMenu;
