module.exports = (function () {

    var index = 1;
    var items = $('.slider__list-down').find('.slider__item');

    var init = function () {
      _setUpListeners();
    };

    var _setUpListeners = function () {
      $('.slider__btn').on('click', function (e) {
        e.preventDefault();

          if($(e.target).closest('a').hasClass('btn-down')) {
            index--;
          } else {
            index++;
          }

          if (index > items.length-1) {
            index = 0
          }

          if (index < 0) {
            index = items.length-1
          }

          var mainSrc = items.eq(index).find('img').attr('src')

          $('.slider__active-img').attr('src', mainSrc);


          _showNextSlide($('.slider__list-down'), 'down');
          _showNextSlide($('.slider__list-up'), 'up');

      });
    };

    var _showNextSlide = function (container, direction) {
      var innerCounter = index;
      var items = container.find('.slider__item'),
          oldItem = items.filter('.active');

      if (direction === 'down') {
        (innerCounter - 1 < 0) ? innerCounter = items.length-1 : innerCounter-- ;
      } else {
        (innerCounter + 1 > items.length-1) ? innerCounter = 0 : innerCounter++ ;
      }

      var newItem = items.eq(innerCounter);
      onSlide(newItem, oldItem, direction)

    };

    function onSlide(newItem, oldItem, direction) {
      if(direction == 'down') {
        newItem.css('top', '-100px');
        oldItem.animate({'top': '100px'}, 300);
        newItem.animate({'top': '0'}, 300, function(){
          newItem.siblings().removeClass('active');
          newItem.addClass('active');
        });

      } else {
        newItem.css('top', '100px');
        oldItem.animate({'top': '-100px'}, 300);
        newItem.animate({'top': '0'}, 300, function(){
          newItem.siblings().removeClass('active');
          newItem.addClass('active');
        });
      }

    }

    return {
      init:init
    };

  })();
