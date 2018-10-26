/*******
 *
 *  Snow fall
 *
 *  Add in body: <canvas class="snow" style="overflow-y:hidden;overflow-x:hidden;width:100%;height:100%;margin:0;position:absolute;top:0;left:0"></canvas>
 *  
 *
 ******/
  
      var canvas = document.querySelector('.snow'),
      ctx = canvas.getContext('2d'),
// start Settings
      windowW = 300,
      windowH = 600,
      numFlakes = 60,
// end settings

      off = "1",
      flakes = [];
    function Flake(x, y) {
      var maxWeight = 4,
        maxSpeed = 2;
      this.x = x;
      this.y = y;
      this.r = randomBetween(0, 1);
      this.a = randomBetween(0, Math.PI);
      this.aStep = 0.01;
      this.weight = randomBetween(2, maxWeight);
      this.alpha = (this.weight / maxWeight);
      this.speed = (this.weight / maxWeight) * maxSpeed;
      this.update = function() {
        this.x += Math.cos(this.a) * this.r;
        this.a += this.aStep;
        this.y += this.speed;
      }
    }

    function init() {
      var i = numFlakes,
        flake,
        x,
        y;
      while (i--) {
        x = randomBetween(0, windowW, true);
        y = randomBetween(0, windowH, true);
        flake = new Flake(x, y);
        flakes.push(flake);
      }
      scaleCanvas();
      loop();
    }

    function scaleCanvas() {
      canvas.width = windowW;
      canvas.height = windowH;
    }

    function loop() {
      var i = flakes.length,
        z,
        dist,
        flakeA,
        flakeB;
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, windowW, windowH);
      ctx.restore();

      while (i--) {
        if (off == 1) {
          flakeA = flakes[i];
          flakeA.update();
          ctx.beginPath();
          ctx.arc(flakeA.x, flakeA.y, flakeA.weight, 0, 2 * Math.PI, false);
          ctx.fillStyle = 'rgba(255, 255, 255, ' + flakeA.alpha + ')';
          ctx.fill();
          if (flakeA.y >= windowH) {
            flakeA.y = -flakeA.weight;
          }
        }
      }
      requestAnimationFrame(loop);
    }

    function randomBetween(min, max, round) {
      var num = Math.random() * (max - min + 1) + min;

      if (round) {
        return Math.floor(num);
      } else {
        return num;
      }
    }

    function distanceBetween(vector1, vector2) {
      var dx = vector2.x - vector1.x,
        dy = vector2.y - vector1.y;

      return Math.sqrt(dx * dx + dy * dy);
    }
    init();
    setTimeout(function() {
        off = "0";
      }, 30000)
      // ****************** SNOW END **********************