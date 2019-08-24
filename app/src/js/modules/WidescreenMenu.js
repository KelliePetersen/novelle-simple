class WidescreenMenu {
  constructor() {
    this.nav = document.getElementsByClassName('nav');
    this.navList = document.getElementsByClassName('nav__list');
    this.navLogo = document.getElementsByClassName('nav__logo');
    this.events();
  }

  events() {
    window.addEventListener('scroll', this.fixedMenu.bind(this));
  }

  fixedMenu() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      this.nav[0].classList.add('nav--fixed');
      this.navList[0].classList.add('nav__list--small');
      this.navLogo[0].classList.add('nav__logo--small');
    } else {
      this.nav[0].classList.remove('nav--fixed');
      this.navList[0].classList.remove('nav__list--small');
      this.navLogo[0].classList.remove('nav__logo--small');
    }
  }
}

export default WidescreenMenu;