define([
  'wrapper/utils/layout'
], function (
  layout
) {
  return function Region () {
    /**
     * Show region elements
     * Hide all others
     */
    var show = function () {
      layout.setBackground();

      // Do not show the menu
      $('#menu').hide();

      // Interaction Element
      $('#interaction').children().hide();
      $('.interaction__region').show();

      $('#info').children().hide();
      $('.info__region').show();

      $('#bottom').children().hide();
    }

    /**
     * Initialize a slideshow for the regions__list
     */
    var initSlides = function () {
      var btnNext = document.querySelector('.region__controls__btn-next');
      var btnPrev = document.querySelector('.region__controls__btn-prev');
      var frame = document.querySelector('.region__list');
      var hammerFrame = new Hammer(frame); // HammerFrame for watching touch events
      var slides = Array.from(document.querySelectorAll('[class^="region__list__slide"]'));
      var currentIndex = 0;

      var transformFrame = function(multiplier) {
        frame.style.transform = `translateX(${-100 * multiplier}%)`;
      }

      var shiftNext = function(e) {
        // Remove the disabled property if it's on btnPrev
        btnPrev.removeAttribute('disabled');
        // If it's a swipe and on the last one, don't change the index
        if (e && e.type === 'swipeleft' && currentIndex === slides.length - 1) {
          currentIndex = currentIndex;
        } else {
          currentIndex++;
        }
        if (currentIndex === slides.length - 1) {
          btnNext.setAttribute('disabled', true);
        }
        transformFrame(currentIndex);
      }

      var shiftPrev = function(e) {
        // Remove the disabled property if it's on btnNext
        btnNext.removeAttribute('disabled');
        // If it's a swipe and on the first one, don't change the index
        if (e && e.type === 'swiperight' && currentIndex === 0) {
          currentIndex = 0;
        } else {
          currentIndex--;
        }
        if (currentIndex === 0) {
          btnPrev.setAttribute('disabled', true);
        }
        transformFrame(currentIndex);
      }

      btnNext.addEventListener('click', shiftNext);
      btnPrev.addEventListener('click', shiftPrev);

      // Add listeners to hammerFrame for swipe events
      hammerFrame.on('swipeleft', function(e) {
        shiftNext(e);
      });
      hammerFrame.on('swiperight', function(e) {
        shiftPrev(e);
      });
    }

    return {
      show: show,
      initSlides: initSlides
    }
  }
});