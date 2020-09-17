class MobileMenu {
  constructor() {
    this.menuButton = document.getElementById('menu-button');
    this.list = document.getElementById('nav-list');
    this.listItem = document.getElementsByClassName('nav-item');
    this.registerEvents();
  }
  registerEvents() {
    this.menuButton.addEventListener("click", this.toggleMenu.bind(this));
    window.addEventListener('scroll', this.closeMenu.bind(this));
    window.addEventListener('resize', this.closeMenu.bind(this));
    Array.from(this.listItem).forEach(item => item.addEventListener("click", this.closeMenu.bind(this)));
  }
  toggleMenu() {
    this.list.classList.toggle("nav__list--is-visible");
    this.menuButton.classList.toggle("menu__button--is-open");
  }
  closeMenu() {
    this.list.classList.remove("nav__list--is-visible");
    this.menuButton.classList.remove("menu__button--is-open");
  }
}

export default MobileMenu;
