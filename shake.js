    var shakingElements = [];

    var shake = function(element, magnitude = 16) {
      var tiltAngle = 1;
      var myCounter = 1;
      var numberOfShakes = 15;
      var startX = 0,
        startY = 0,
        startAngle = 0;
      var magnitudeUnit = magnitude / numberOfShakes;
      var randomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
      if (shakingElements.indexOf(element) === -1) {
        shakingElements.push(element);
        angularShake();
      }

      function angularShake() {
        if (myCounter < numberOfShakes) {
          console.log(tiltAngle);
          element.style.transform = 'rotate(' + startAngle + 'deg)';
          magnitude -= magnitudeUnit;
          var angle = Number(magnitude * tiltAngle).toFixed(2);
          console.log(angle);
          element.style.transform = 'rotate(' + angle + 'deg)';
          myCounter += 1;
          tiltAngle *= -1;

          requestAnimationFrame(angularShake);
        }
        if (myCounter >= numberOfShakes) {
          element.style.transform = 'rotate(' + startAngle + 'deg)';
          shakingElements.splice(shakingElements.indexOf(element), 1);
        }
      }
    };
// Shake every 2 sec.
    var myInterval = window.setInterval(function() {
      shake(document.getElementById("ELEMENT_ID"), 10); // 10 is the magnitude default to 16
    }, 2000);
// Stop shaking after 28 sec.
    setTimeout(function() {
      clearInterval(myInterval);
    }, 28000)
