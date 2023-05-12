document.addEventListener("DOMContentLoaded", function() {
    var backToTopBtn = document.getElementById("backtotopbtn");
    var isScrolling = false;
    var scrollInterval;
  
    window.addEventListener("scroll", function() {
      if (!isScrolling && window.pageYOffset > 100) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    });
  
    backToTopBtn.addEventListener("click", function() {
      scrollToTop(1000);
    });
  
    function scrollToTop(scrollDuration) {
      var scrollHeight = window.scrollY;
      var scrollStep = Math.PI / (scrollDuration / 15);
      var cosParameter = scrollHeight / 2;
  
      var scrollCount = 0;
      var scrollMargin;
  
      isScrolling = true;
  
      function step() {
        scrollInterval = setTimeout(function() {
          requestAnimationFrame(step);
          scrollCount++;
          scrollMargin =
            cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
          window.scrollTo(0, scrollHeight - scrollMargin);
  
          if (scrollCount >= Math.floor(scrollDuration / 15)) {
            window.scrollTo(0, 0);
            isScrolling = false;
          }
        }, 15);
      }
  
      requestAnimationFrame(step);
  
      window.addEventListener("scroll", function() {
        clearTimeout(scrollInterval);
        isScrolling = false;
      });
    }
  });
  