/*******
 *
 *  Sparkles
 *
 *  Add in body: <div id="wrapper"></div>
 *  
 *  jQuery independent: <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
 *
 ******/
 
 // Settings 
  var wrapperWidth = 136;
  var wrapperHeight = 107;
  var wrapperTop = 35;
  var wrapperLeft = 16;
  var setSpeed =  350; // Miliseounds - higher slower
  var sparkles = 8;
    
  $('#wrapper').css({'width': wrapperWidth + 'px','height': wrapperHeight + 'px','position': 'absolute','top': wrapperTop + 'px','left': wrapperLeft + 'px'});    
 
  var Sparkle = function() {
      'use strict';
  var wrapper = null;
  var stars = [];
  var paused = false;
  var init = function(wrapperId) {
      initSlots(wrapperId);
      buildStars();
      setTimeout(initAnimation, 0);
  };
  var initSlots = function(wrapperId) { wrapper = $(wrapperId);}
  var buildStars = function() {
    for (var i = 0; i < sparkles; i++) {
      buildStar(i);
    }
  };
    var buildStar = function(id) {
    var star = document.createElement('div');
    star.id = 'star' + id;
    var pos = placeStar();
    star.style.cssText = 'position:fixed;width:15px;height:15px;left:' + pos.x + 'px;top:' + pos.y + 'px;opacity:1';
    var img = document.createElement('img');
    img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAQAAACR313BAAAAS0lEQVQYGZXBQRGAIABFwVeCJBIG00AbwkgRKfE8c/kz7sLBQmIlsZE4SJwkPiRuTharze50udXX5XR4e1k4uUlcJE4SO4mNxIs/PsnOKsJwHzXnAAAAAElFTkSuQmCC';
    star.appendChild(img);
    document.body.insertBefore(star, document.body.lastChild);
    stars.push(star);
  };
  var placeStar = function() {
  var pos = {
    x: null,
    y: null
  };
      pos.x = Math.floor(wrapperLeft + Math.random() * wrapperWidth);
      pos.y = Math.floor(wrapperTop + Math.random() * wrapperHeight);
      return pos;
    };
  var initAnimation = function() {
    var i, l = stars.length;
    for (i = 0; i < l; i++) {
      animateStar(stars[i]);
    }
  };
  var animateStar = function(star) {
    var speed = setSpeed + Math.random() * setSpeed;
    $(star).animate({
        opacity: 0
      },
      speed,
      function() {
        if (paused === true) return;
        var pos = placeStar();
        pos.x -= 7;
        pos.y -= 7;
        star.style.cssText = 'position:fixed;width:15px;height:15px;left:' + pos.x + 'px;top:' + pos.y + 'px;opacity:1';
        animateStar(star);
       });
  };
  return {
    init: init
  };
};
        var sparkle = new Sparkle();
        sparkle.init('#wrapper');