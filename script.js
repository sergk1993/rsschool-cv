function burger() {
    const click = document.querySelector('.header-lists');
    click.classList.toggle('active');
    this.classList.toggle('header__btn-active')
  }
  document.querySelector('.header__btn').onclick = burger;
  
  const anchors = document.querySelectorAll('a[href*="#"]');
  for (let anchor of anchors) {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const blockID = anchor.getAttribute('href');
      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }