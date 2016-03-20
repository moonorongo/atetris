    function updateCanvas() {
      ctx.clearRect(0,0,160,320);
      //ctx.drawImage(blocks,x,y,32,32);
      //putChar(x,y,1,1);
      drawGrid();
      drawBlock(x,y,pieza);
    }
    
    
    function putChar(cx,cy,tipo_bloque,numero_bloque) {
      ctx.drawImage(blocks,(numero_bloque-1)*8,(tipo_bloque-1)*8,8,8,cx*16,cy*16,16,16);
    }
    

    function putCharInMatriz(cx,cy,tipo_bloque, numero_bloque) {
      pl1[cy*11 + cx] = ((tipo_bloque-1) * 20) + numero_bloque;
    }






    function initCanvas() {
      
        var canvas = document.getElementById('tutorial');

        if (canvas.getContext){
          ctx = canvas.getContext('2d');
          ctx.mozImageSmoothingEnabled = false;
          blocks = new Image(); // declarar sin "var" produce q sean globales
          //img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9YGARc5KB0XV+IAAAAddEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIFRoZSBHSU1Q72QlbgAAAF1JREFUGNO9zL0NglAAxPEfdLTs4BZM4DIO4C7OwQg2JoQ9LE1exdlYvBBeZ7jqch9//q1uH4TLzw4d6+ErXMMcXuHWxId3KOETnnXXV6MJpcq2MLaI97CER3N0vr4MkhoXe0rZigAAAABJRU5ErkJggg==';
     
          blocks.src ='img/blocks.gif';

          } else {
          alert("NAVEGADOR PEDORRO DETECTADO - por favor actualizate si pretendes ver algo de esto."); // no se detecto canvas
      }      
    }


    function drawGrid() {
      
      for(py=0; py<20; py++){
        for(px=0;px<10; px++) {
         if(pl1[(py*11)+px] != 0) { putChar(px,py, getTipoBloque(pl1[(py*11)+px]), getNumBloque(pl1[(py*11)+px]));}
        }
      }
      
    }
