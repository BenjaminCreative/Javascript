/*******
 *
 *  Snow fall
 *
 *  Add in body <div id="flakesness" style="position: absolute; top:0; left:0; width:100%; height:100%"></div>
 *  change the size of the div in the html
 *
 ******/
  
 // start Settings
    var snow_no = 10; // Antal fnug 
    var flake1 = "fnug1.png";
    var flake2 = "fnug2.png";
    var flake3 = "fnug3.png";
    var snow_browser_width = 160; // Banner vidde
    var snow_browser_height = 600; // Banner højde
 // End settings
 
    var snow_dx = [];
    var snow_xp = [];
    var snow_yp = [];
    var snow_am = [];
    var snow_stx = [];
    var snow_sty = [];
    var rnd, snow_img;

    var el = document.getElementById('flakesness'),
      elChild;
    for (i = 0; i < snow_no; i++) {
      rnd = Math.floor((Math.random() * 3) + 1);
      if (rnd == 3) {
        snow_img = flake2;
      }
      if (rnd == 2) {
        snow_img = flake3;
      }
      if (rnd == 1) {
        snow_img = flake1;
      }
      snow_dx[i] = 0;
      snow_xp[i] = Math.random() * (snow_browser_width - 100);
      snow_yp[i] = Math.random() * snow_browser_height + 40;
      snow_am[i] = Math.random() * 20;
      snow_stx[i] = 0.02 + Math.random() / 70;
      snow_sty[i] = 0.5 + Math.random();
      elChild = document.createElement('div');
      elChild.setAttribute("id", "snow_flake" + i);
      elChild.setAttribute("style", "pointer-events:none;position:absolute;");
      elChild.innerHTML = "<\img src=\"" + snow_img + "\" border=\"0\">";
      el.appendChild(elChild);
    }

    var stopmenow = "true";
    setTimeout(function() {
      stopmenow = "false";
    }, 28000);

    function SnowStart() {
      if (stopmenow == "true") {
        for (i = 0; i < snow_no; i++) {
          snow_yp[i] += snow_sty[i];
          if (snow_yp[i] > snow_browser_height - 40) {
            snow_xp[i] = Math.random() * (snow_browser_width - snow_am[i]);
            snow_yp[i] = 0;
            snow_stx[i] = 0.1 + Math.random() / 90;
            snow_sty[i] = 0.7 + Math.random();
          }
          snow_dx[i] += snow_stx[i];
          document.getElementById("snow_flake" + i).style.top = snow_yp[i] + "px";
          document.getElementById("snow_flake" + i).style.left = snow_xp[i] + snow_am[i] * Math.sin(snow_dx[i]) + "px";
        }
        snow_time = setTimeout("SnowStart()", 30);
      }
    }

    setTimeout(function() {
      SnowStart();
    }, 1500);

    setTimeout(function() {
      SnowStart();
    }, 1000);

     // END Snow fall *****************************************************