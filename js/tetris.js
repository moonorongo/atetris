      function init(){

       // inicializo la deteccion de teclado
       document.onkeydown = keydown_handler;
       document.onkeyup = keyup_handler;
       
       //checkeo el teclado 50 veces por segundo
        setInterval("checkKey()",20);
       //checkeo el teclado 50 veces por segundo
        //setInterval("checkKey()",100);

       // inicializo la variable canvas, con el contenido del <canvas> del documento.
       initCanvas();
       

       // inicializo variables que usare 
       
       pl1 =    [ 200,200,200,200,200,200,200,200,200,200,15,
                  200,200,200,200,200,200,200,200,200,200,15,
                  200,200,200,200,200,200,200,200,200,200,15   ,
                  200,200,200,200,200,200,200,200,200,200,15   ,
                  200,200,200,200,200,200,200,200,200,200,15   ,
                  200,200,200,200,200,200,200,200,200,200,15   ,
                  200,200,200,200,200,200,200,200,200,200,15   ,
                  200,200,200,200,200,200,200,200,200,200,15   ,
                  200,200,200,200,200,200,200,200,200,200,15   ,
                  200,200,200,200,200,200,200,200,200,200,15   ,
                  200,200,200,200,200,200,200,200,200,200,15   ,
                  200,200,200,200,200,200,200,200,200,200,15   ,
                  200,200,200,200,200,200,200,200,200,200,15   ,
                  200,200,200,200,200,200,200,200,200,200,15   ,
                  200,200,200,200,200,200,200,200,200,200,15   ,
                  200,200,200,200,200,200,200,200,200,200,15   ,
                  200,200,200,200,200,200,200,200,200,200,15   ,
                  200,200,200,200,200,200,200,200,200,200,15   ,
                  200,200,200,200,200,200,200,200,200,200,15   ,
                  200,200,200,200,200,200,200,200,200,200,15   ]
                  
       
       rotacion=0;
       numero_pieza=0;
       y=0;
       pieza = getBlock(numero_pieza,rotacion);

       velocidad = 50;

    }

