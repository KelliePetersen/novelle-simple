class WidescreenMenu {
  constructor() {
    this.nav = document.getElementById('nav');
    this.navLogo = document.getElementById('nav-logo');
    this.navList = document.getElementById('nav-list');
    this.registerEvents();
  }

  registerEvents() {
    window.addEventListener('scroll', this.hiddenMenu.bind(this));
    window.addEventListener('scroll', this.fixedMenu.bind(this));
  }

  hiddenMenu() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      this.nav.classList.add('nav--is-hidden');
    } else {
      this.nav.classList.remove('nav--is-hidden');
    }
  }

  fixedMenu() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      this.nav.classList.add('nav--is-fixed');
      this.navList.classList.add('nav__list--is-small');
      this.navLogo.classList.add('nav__logo--is-small');
    } else {
      this.nav.classList.remove('nav--is-fixed');
      this.navList.classList.remove('nav__list--is-small');
      this.navLogo.classList.remove('nav__logo--is-small');
    }
  }
}

export default WidescreenMenu;