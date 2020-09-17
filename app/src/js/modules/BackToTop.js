class BackToTop {
  constructor() {
    this.backToTopButton = document.getElementById('back-to-top');
    this.registerEvents();
  }

  registerEvents() {
    window.addEventListener('scroll', this.scrollFunction.bind(this));
  }

  scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.backToTopButton.classList.remove('back-to-top--is-hidden');
    } else {
      this.backToTopButton.classList.add('back-to-top--is-hidden');
    }
  }
}

export default BackToTop;