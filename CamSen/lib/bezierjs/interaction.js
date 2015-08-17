function handleInteraction(cvs, curve, interaction) {

  var fix = function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        rect = target.getBoundingClientRect();
    e.offsetX = e.clientX - rect.left;
    e.offsetY = e.clientY - rect.top;
  };

  var lpts = curve.points;
  var moving = false, mx = my = ox = oy = 0, cx, cy, mp = false;

  var handler = { onupdate: function() {} };
  
  if (interaction){
    //JOEL
    console.log(interaction)
    console.log(camaraAlta.banca.node);

    camaraAlta.banca.node.addEventListener("mousedown", function(evt) {
      fix(evt);
      mx = evt.offsetX;
      my = evt.offsetY;
      lpts.forEach(function(p) {
        if(Math.abs(mx-p.x)<10 && Math.abs(my-p.y)<10) {
          moving = true;
          mp = p;
          cx = p.x;
          cy = p.y;
        }
      });
    });

    camaraAlta.banca.node.addEventListener("mousemove", function(evt) {
      fix(evt);
      var found = false;
      lpts.forEach(function(p) {
        var mx = evt.offsetX;
        var my = evt.offsetY;
        if(Math.abs(mx-p.x)<10 && Math.abs(my-p.y)<10) {
          found = found || true;
        }
      });
      camaraAlta.banca.node.style.cursor = found ? "pointer" : "default";

      if(!moving) return;
      ox = evt.offsetX - mx;
      oy = evt.offsetY - my;
      mp.x = cx + ox;
      mp.y = cy + oy;
      curve.update();
      handler.onupdate();
    });

    camaraAlta.banca.node.addEventListener("mouseup", function(evt) {
      if(!moving) return;
      // console.log(curve.points.map(function(p) { return p.x+", "+p.y; }).join(", "));
      moving = false;
      mp = false;
    });

    camaraAlta.banca.node.addEventListener("click", function(evt) {
      console.log(evt.offsetX);
        console.log(evt.offsetY);
      fix(evt);
      var mx = evt.offsetX;
      var my = evt.offsetY;
    });
  }

  return handler;
}
