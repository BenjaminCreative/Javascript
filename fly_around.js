     // START MOVING  
    var timeenabled = "true";
    $(document).ready(function() {
      var position, w, h;
      setTimeout(function() {
        timeenabled = "false";
      }, 28000);

      for (i = 1; i < 9; i++) {
        position = $('#item' + i).offset();
        h = position.top + 20;
        w = position.left + 20;
        animateDiv('#item' + i, w, h);
      }
    });

    function makeNewPosition(div, w, h) {
      var nh = Math.floor(Math.random() * 600); // Set boundary height
      var nw = Math.floor(Math.random() * 160); // Set boundary width
      console.log(nh + " // " + nw);
      return [nh, nw];
    }

    function animateDiv(div, w, h) {
      var newq = makeNewPosition(div, w, h);
      var oldq = $(div).offset();
      var speed = calcSpeed([oldq.top, oldq.left], newq);
      $(div).animate({
        top: newq[0],
        left: newq[1]
      }, speed, function() {
        if (timeenabled == "true") {
          animateDiv(div, w, h);
        }
      });
    };


    function calcSpeed(prev, next) {
      var x = Math.abs(prev[1] - next[1]);
      var y = Math.abs(prev[0] - next[0]);
      var greatest = x > y ? x : y;
      var speedModifier = 0.04;
      var speed = Math.ceil(greatest / speedModifier);
      return speed;
    }
