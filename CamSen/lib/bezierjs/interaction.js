//HIPOTESIS:
// NO ESTA TOMANDO TODOS LOS CIRCULOS
// NO ESTA TOMANDO LOS PUNTOS QUE HACEN LA CURVA

// HIPOTESIS2: 23/08
// JOEL- SE ESTÁ UTILIZANDO COORDENADAS NEGATIVAS PARA ACOMODAR.
// PERO HAY QUE UTILIZAR CUATRO PUNTOS.

function handleInteraction(cvs, curve, interaction) {
//console.log(cvs);
  var fix = function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        rect = target.getBoundingClientRect();
        console.log(rect.left);
    e.offsetX = e.clientX - rect.left;
    e.offsetY = e.clientY - rect.top;
  };

  var lpts = curve.points;
  var moving = false, mx = my = ox = oy = 0, cx, cy, mp = false;

  var handler = { onupdate: function() {} };
  
  if (interaction){
    //JOEL
    //console.log("entro!")
    //console.log(interaction)
    //console.log(camaraAlta.banca.node);

    camaraAlta.banca.node.addEventListener("mousedown", function(evt) {
      fix(evt);
      mx = evt.offsetX;
      my = evt.offsetY;
      lpts.forEach(function(p) {
        console.log("**************************");
        console.log("-------------------");
        console.log("mx: " +mx);
        console.log("my: " + my);
        console.log("-------------------");
        console.log("p.x: " +p.x);
        console.log("p.y: " + p.y);
        console.log("-------------------");
        console.log("evt.offsetY: " + evt.offsetY);
        console.log("evt.offsetX: "+ evt.offsetX);
        console.log("-------------------");
        console.log("mx-p.x: " + (mx-p.x));
        console.log("my-p.y: " + (my-p.y));
        if(Math.abs(mx-p.x)<10 && Math.abs(my-p.y)<10) {
          moving = true;
          mp = p;
          cx = p.x;
          cy = p.y;
          console.log("moving: " + moving);
        }
      });
    });

    camaraAlta.banca.node.addEventListener("mousemove", function(evt) {
      //console.log(evt);
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
      /*console.log(evt.offsetX);
      console.log(evt.offsetY);
      console.log(mx);
      console.log(my);*/
      if(!moving) return;
      console.log(moving);
      ox = evt.offsetX - mx;
      oy = evt.offsetY - my;
      mp.x = cx + ox;
      mp.y = cy + oy;

      console.log("#######################3");
      console.log(mp.x);
      console.log(mp.y);

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
      console.log(evt);
      fix(evt);
      var mx = evt.offsetX;
      var my = evt.offsetY;
    });
  }

  return handler;
}
