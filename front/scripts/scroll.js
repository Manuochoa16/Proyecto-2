function controlarScroll() {
    window.addEventListener('scroll', function() {
      var header = document.getElementById('barNav');
      var scrollPosition = window.scrollY;
  
      if (scrollPosition > 0) {
        header.classList.add('header-dark');
        header.classList.remove('header-transparent');
      } else {
        header.classList.remove('header-dark');
        header.classList.add('header-transparent');
      }
    });
  }
  
  module.exports = { controlarScroll };
  