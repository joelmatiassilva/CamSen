        jQuery(function ($)
        {
            	var paper = new Raphael(document.getElementById('canvas_container'), 800,800);

				var lienzo1 = paper.path("m92.671875,239.999985c0,-125.59565 101.732468,-227.328129 227.328125,-227.328129c125.595642,0 227.328125,101.732479 227.328125,227.328129"); 
				var lienzo2 = paper.path("m125.671776,239c0,-107.363617 86.964516,-194.328133 194.328133,-194.328133c107.363586,0 194.328094,86.964516 194.328094,194.328133");
				var lienzo3 = paper.path("m161.421906,239.000015c0,-87.059738 70.965897,-157.578125 158.578125,-157.578125c87.612213,0 158.578125,70.518387 158.578125,157.578125");
				var lienzo4 = paper.path("m161.421906,239.000015c0,-87.059738 70.965897,-157.578125 158.578125,-157.578125c87.612213,0 158.578125,70.518387 158.578125,157.578125");				

				var circ1 = paper.circle(110.000001, 227.499999, 5.070313 );
				var circ2 = paper.circle(312.000001, 25.999999, 5.070313 );
				var circ3 = paper.circle(530.000001, 228.499999, 5.070313 );
				var circ4 = paper.circle(530.000001, 208.999999, 5.070313 );
				var circ5 = paper.circle(116.000001, 205.999999, 5.070313 );
				var circ6 = paper.circle(133.000001, 155.499999, 5.070313 );
				var circ7 = paper.circle(198.000001, 73.999999, 5.070313 );
				var circ8 = paper.circle(166.000001,  99.499999, 5.070313 );
				var circ9 = paper.circle(142.000001, 133.999999, 5.070313 );
				var circ10 = paper.circle(123.000001, 178.999999, 5.070313 );
				var circ11 = paper.circle(218.000001, 61.499999, 5.070313 );
				var circ12 = paper.circle(258.000001, 37.999999, 5.070313 );
				var circ13 = paper.circle(469.000001, 94.499999, 5.070313  );
				var circ14 = paper.circle(446.000001, 71.999999, 5.070313 );
				var circ15 = paper.circle(418.000001, 52.999999, 5.070313 );
				var circ16 = paper.circle(362.000001, 29.499999, 5.070313 );
				var circ17 = paper.circle(239.000001, 45.999999, 5.070313 );
				var circ18 = paper.circle(286.000001, 31.499999, 5.070313  );
				var circ19 = paper.circle(341.000001, 25.999999, 5.070313 );
				var circ20 = paper.circle(400.000001,39.999999, 5.070313 );
				var circ21 = paper.circle(459.000001, 80.499999, 5.070313 );
				var circ22 = paper.circle(485.000001, 108.999999, 5.070313 );
				var circ23 = paper.circle(527.000001, 189.499999, 5.070313 );
				var circ24 = paper.circle(518.000001, 168.999999, 5.070313 );
				var circ25 = paper.circle(146.000001, 228.999999, 5.070313 );
				var circ26 = paper.circle(155.000001, 184.499999, 5.070313  );
				var circ27 = paper.circle(217.000001, 92.999999, 5.070313);
				var circ28 = paper.circle(186.000001,122.499999 , 5.070313);
				var circ29 = paper.circle(162.000001, 163.999999, 5.070313 );
				var circ30 = paper.circle(150.000001, 207.999999, 5.070313 );
				var circ31 = paper.circle(237.000001, 81.499999, 5.070313 );
				var circ32 = paper.circle(288.000001, 66.999999, 5.070313 );
				var circ33 = paper.circle(496.000001, 131.499999, 5.070313 );
				var circ34 = paper.circle(507.000001, 147.999999, 5.070313  );
				var circ35 = paper.circle(432.000001, 63.999999, 5.070313 );
				var circ36 = paper.circle(151.000001, 116.499999 , 5.070313 );
				var circ37 = paper.circle(263.000001, 72.999999, 5.070313  );
				var circ38 = paper.circle(307.000001, 64.499999, 5.070313 );
				var circ39 = paper.circle(381.000001, 34.999999, 5.070313 );
				var circ40 = paper.circle(181.000001, 83.999999 , 5.070313 );
				var circ41 = paper.circle(491.000001, 205.999999  , 5.070313 );
				var circ42 = paper.circle(475.000001, 155.499999  , 5.070313 );
				var circ43 = paper.circle(417.000001, 89.999999 ,5.070313  );
				var circ44 = paper.circle(445.000001, 114.499999  ,5.070313 );
				var circ45 = paper.circle(459.000001, 136.999999  ,5.070313  );
				var circ46 = paper.circle(483.000001,  178.999999,5.070313  );
				var circ47 = paper.circle(494.000001, 228.499999, 5.070313 );
				var circ48 = paper.circle(334.000001 , 64.999999 , 5.070313 );
				var circ49 = paper.circle(382.000001 ,77.999999  , 5.070313 );
				var circ50 = paper.circle(360.000001 ,67.499999  , 5.070313 );
				var circ51 = paper.circle( 172.000001, 143.999999 , 5.070313 );
				var circ52 = paper.circle( 400.000001, 83.499999 ,5.070313  );
				var circ53 = paper.circle( 430.000001,100.999999  , 5.070313 );
				var circ54 = paper.circle(204.000001, 103.499999  , 5.070313 );
				var circ55 = paper.circle( 402.000001,123.999999  , 5.070313 );
				var circ56 = paper.circle( 180.000001,227.499999  ,5.070313  );
				var circ57 = paper.circle( 233.000001, 130.999999 ,5.070313  );
				var circ58 = paper.circle( 201.000001, 167.499999 , 5.070313 );
				var circ59 = paper.circle( 183.000001, 206.999999 , 5.070313 );
				var circ60 = paper.circle( 385.000001,112.999999  , 5.070313 );				
				var circ61 = paper.circle( 253.000001,119.499999  , 5.070313 );
				var circ62 = paper.circle(294.000001, 100.999999 , 5.070313 );
				var circ63 = paper.circle( 275.000001, 106.999999 ,5.070313  );
				var circ64 = paper.circle(344.000001,102.499999  , 5.070313 );
				var circ65 = paper.circle( 458.000001,206.999999  , 5.070313 );
				var circ66 = paper.circle(365.000001 ,106.999999  , 5.070313 );
				var circ67 = paper.circle( 437.000001, 162.999999 , 5.070313 );
				var circ68 = paper.circle(421.000001 ,141.499999  , 5.070313 );
				var circ69 = paper.circle( 191.000001, 186.999999 , 5.070313 );
				var circ70 = paper.circle(448.000001 ,  185.499999,5.070313  );
				var circ71 = paper.circle(462.000001 ,  227.999999, 5.070313 );
				var circ72 = paper.circle(218.000001 ,146.499999  , 5.070313 );
 
				var lineaRecta = paper.path("M 548 238 91 238");				

		
            circ1.attr({ fill: '#FFFFFF', stroke: '#000000', 'stroke-width': 1, 'stroke-linejoin': 'round', 'fill': '#888' });
	
			$(circ1.node).qtip({ content: 
{ text: '<img src=imagenes/Peron.jpg style=display: none /><br/>Nombre: Peron <br/> Partido: PJ</a>'},
                style: {
                    background: 'white',
                    color: 'blue',
                    border: { width: 6, radius: 3, color: 'blue' }
                },
                position: {
                    corner: {
                        target: 'topRight',
                        tooltip: 'bottomLeft'
                    }
                }
            });
        });

