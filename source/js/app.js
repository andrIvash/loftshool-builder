
var module = require('./second');
var slider = require('./slider');

module();


slider.init();

if ($('body').hasClass('google')) {
  initMap();  
}
