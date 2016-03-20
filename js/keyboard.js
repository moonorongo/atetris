/* keyboard handler - multiple key press */ 

      function keydown_handler(e)
      {
          key[e.keyCode] = true;
          special_keys(e);
          
      }

      function keyup_handler(e)
      {
          key[e.keyCode] = false;
          special_keys(e);
      }

      function special_keys(e)
      {
          key["alt"] = e.altKey;
          key["ctrl"] = e.ctrlKey;
          key["shift"] = e.shiftKey;
      }




/* KEYS */

    function checkKey() {
      
       if(key[37] && x > -3){
          //keyCode 37 is left arrow
          key[37]=false;
          if(checkBlock(x-1,y,pieza)) {
            x -= 1;
            updateCanvas();
          }
         
       }
       if(key[39] && x < 14){
          //keyCode 39 is right arrow
          key[39]=false;
          if(checkBlock(x+1,y,pieza)) {
            x += 1;
            updateCanvas();
          }
         
       }
       
       /*if(key[38] && y > -3){
          if(checkBlock(x,y-1,pieza)) {
            y -= 1;
            updateCanvas();
          }         
       }*/
      
       if(key[40] && y < 21){
          if(checkBlock(x,y+1,pieza)) {
            y += 1;
            updateCanvas();
          }
       }
       

       if(key[38]){
           key[38] = false;
           var estadoAnteriorRotacion = rotacion;
           
           rotacion++;
           if(rotacion >= getBlockRotation(numero_pieza)) rotacion = 0;
           pieza = getBlock(numero_pieza,rotacion);
           
           if (checkBlock(x,y,pieza)) {
            updateCanvas();
           } else {
             rotacion = estadoAnteriorRotacion;
             pieza = getBlock(numero_pieza,rotacion);
           }
       }


       if(key[13]){
         //drawBlockInMatriz(x,y,pieza);
         //y+=2;
         //updateCanvas();
         //alert(pl1);
         key[13] = false;
         
       }


       velocidad--;
       
       if(velocidad==0) {
         velocidad = 50;

         if(checkBlock(x,y+1,pieza)) {
           y++;
           updateCanvas();
         } else {
           drawBlockInMatriz(x,y,pieza);
           
           
           
           while(haveLines()) {
             clearFirstLine();
           }
           
           y = 0;
           x = 5;
           rotacion = 0;
           numero_pieza = Math.floor(Math.random() * 7);
           pieza = getBlock(numero_pieza,rotacion);

           /*if (!checkBlock(x,y,pieza)) {
             alert("perdistes SORETE!");
           }*/
           updateCanvas();
         }
       }
       
    }
