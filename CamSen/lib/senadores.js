          jQuery(function ($)
        {
			$(camaraBaja.banca.node).qtip({ content: 
{ text: '<img src=imagenes/DipEricCalcagnoyMaillman.jpg style=display: none /><br/>ERIC CALCAGNO Y MAILLMAN <br/>Alianza Frente para la Victoria</a>'},
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

			$(camaraAlta.banca.node).qtip({ content: 
{ text: '<img src=imagenes/SenDanielFernandoFilmus.jpg style=display: none /><br/>Daniel Fernando Filmus <br/>Alianza Frente para la Victoria</a>'},
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

