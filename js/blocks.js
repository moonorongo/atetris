function drawBlock(x,y,tipo_pieza) {
    for(py=0; py<4; py++){
      for(px=0; px<4;px++){
        if (tipo_pieza[(py*4)+px] != 0) {
          //                        tipo_bloque y numero bloque
          putChar(x+px,y+py, getTipoBloque(tipo_pieza[(py*4)+px]), 
                             getNumBloque(tipo_pieza[(py*4)+px]) );
        }
      }
    }
}

function drawBlockInMatriz(x,y,tipo_pieza) {
    for(py=0; py<4; py++){
      for(px=0; px<4;px++){
        if (tipo_pieza[(py*4)+px] != 0) {
          putCharInMatriz(x+px,y+py, getTipoBloque(tipo_pieza[(py*4)+px]), 
                             getNumBloque(tipo_pieza[(py*4)+px]) );
        }
      }
    }

}



function checkBlock(x,y,tipo_pieza) {

    ok = true;
    for(py=0; py<4; py++){
      for(px=0; px<4;px++){
        if (tipo_pieza[(py*4)+px] != 0) {
          if( pl1[((y+py)*11)+x+px] != 200) {ok = false};
        }
      }
    }  
    
  return(ok);
}




function getTipoBloque(numChar) {
  return(Math.floor((numChar - 1) / 20) + 1);
}
  
function getNumBloque(numChar) {
  return(numChar - (Math.floor((numChar - 1) / 20)*20));
}
  

function getBlock(nroBlock,rotacion) {
  
  var block = [];
  
  block[0] = [];
  block[1] = [];
  block[2] = [];
  block[3] = [];
  block[4] = [];
  block[5] = [];
  block[6] = [];
  
  block[0][0] = [8,14,2,0,
                 0,0,7,0,
                 0,0,0,0,
                 0,0,0,0];
  block[0][1] = [1,6,0,0,
                 13,0,0,0,
                 7,0,0,0,
                 0,0,0,0];
  block[0][2] = [0,0,0,0,
                 5,0,0,0,
                 3,14,6,0,
                 0,0,0,0];
  block[0][3] = [0,0,5,0,
                 0,0,13,0,
                 0,8,4,0,
                 0,0,0,0];
  
  
  block[1][0] = [0,0,0,0,
                 0,21,26,0,
                 28,24,0,0,
                 0,0,0,0];
  block[1][1] = [25,0,0,0,
                 23,22,0,0,
                 0,27,0,0,
                 0,0,0,0];
  
  
  block[2][0] = [0,0,0,0,
                 48,42,0,0,
                 0,43,46,0,
                 0,0,0,0];
  block[2][1] = [0,45,0,0,
                 41,44,0,0,
                 47,0,0,0,
                 0,0,0,0];

  
  block[3][0] = [61,62,0,0,
                 63,64,0,0,
                 0,0,0,0,
                 0,0,0,0];


  block[4][0] = [0,0,0,0,
                 88,91,86,0,
                 0,87,0,0,
                 0,0,0,0];
  block[4][1] = [85,0,0,0,
                 90,86,0,0,
                 87,0,0,0,
                 0,0,0,0];
  block[4][2] = [0,0,0,0,
                 0,85,0,0,
                 88,89,86,0,
                 0,0,0,0];
  block[4][3] = [0,85,0,0,
                 88,92,0,0,
                 0,87,0,0,
                 0,0,0,0];
  

  block[5][0] = [108,102,0,0,
                 0,113,0,0,
                 0,107,0,0,
                 0,0,0,0];
  block[5][1] = [0,0,105,0,
                 108,114,104,0,
                 0,0,0,0,
                 0,0,0,0];
  block[5][2] = [0,105,0,0,
                 0,113,0,0,
                 0,103,106,0,
                 0,0,0,0];
  block[5][3] = [0,0,0,0,
                 101,114,106,0,
                 107,0,0,0,
                 0,0,0,0];


  block[6][0] = [0,125,0,0,
                 0,133,0,0,
                 0,133,0,0,
                 0,127,0,0];
  block[6][1] = [0,0,0,0,
                 128,134,134,126,
                 0,0,0,0,
                 0,0,0,0];

  return(block[nroBlock][rotacion]);
}
  

function getBlockRotation(n_pieza) {
  
  var pieza = [4,2,2,1,4,4,2];
  return(pieza[n_pieza]);
}


function checkLine(lineNumber) {
    for(var lx=0;lx<10;lx++) {
      if(pl1[(lineNumber*11)+lx]==200) return(false);
    }
    return(true);
}


function haveLines() {
  var lineFilled = false;
  
  for(var ly=19;ly>=0;ly--) {
    if (checkLine(ly)) { 
      lineFilled = true;
      break;
    }
  }
  return(lineFilled);
}


function clearFirstLine() {
  for(var ly=19;ly>=0;ly--) {
    if (checkLine(ly)) { 
      clearLine(ly);
      scrollLines(ly);
    }
  }
  
}


function closeBlock(numLine,posicion) {
    tipoCaracter = getTipoBloque(pl1[(numLine*11)+posicion]);
    
    numCaracter = getNumBloque(pl1[(numLine*11)+posicion]);
    numDebajo = getNumBloque(pl1[((numLine+1)*11)+posicion]);
    numArriba = getNumBloque(pl1[((numLine-1)*11)+posicion]);
    
    
    var carSalida = pl1[(numLine*11) + posicion];
    

    //putChar(posicion, numLine,1,15);
    //alert(numArriba);
        
    if ((numCaracter == 5) && (numDebajo == 20)) { carSalida = ((tipoCaracter-1) * 20) + 15;}
    if ((numCaracter == 7) && (numArriba == 20)) { carSalida = ((tipoCaracter-1) * 20) + 15;}

    if ((numCaracter == 1) && (numDebajo == 20)) { carSalida = ((tipoCaracter-1) * 20) + 8;}
    if ((numCaracter == 3) && (numArriba == 20)) { carSalida = ((tipoCaracter-1) * 20) + 8;}
    
    if ((numCaracter == 2) && (numDebajo == 20)) { carSalida = ((tipoCaracter-1) * 20) + 6;}
    if ((numCaracter == 4) && (numArriba == 20)) { carSalida = ((tipoCaracter-1) * 20) + 6;}

    if ((numCaracter == 11) && (numDebajo == 20)) { carSalida = ((tipoCaracter-1) * 20) + 14;}
    if ((numCaracter == 9) && (numArriba == 20)) { carSalida = ((tipoCaracter-1) * 20) + 14;}
    
    if (numCaracter == 10) {
      if (numDebajo == 20) { carSalida = ((tipoCaracter-1) * 20) + 3;}
      if (numArriba == 20) { carSalida = ((tipoCaracter-1) * 20) + 1;}
    }
    
    if (numCaracter == 12) {
      if (numDebajo == 20) { carSalida = ((tipoCaracter-1) * 20) + 4;}
      if (numArriba == 20) { carSalida = ((tipoCaracter-1) * 20) + 2;}
    }

    if (numCaracter == 13) {
      if (numDebajo == 20) { carSalida = ((tipoCaracter-1) * 20) + 7;}
      if (numArriba == 20) { carSalida = ((tipoCaracter-1) * 20) + 5;}
    }

    return(carSalida);
  
}



function clearLine(numLine) {
  for(var lx=0;lx<10;lx++){
    pl1[(numLine*11)+lx] = 200;
  }


  for(var lx=0;lx<10;lx++) {
      pl1[((numLine-1)*11)+lx] = closeBlock(numLine-1,lx);
      pl1[((numLine+1)*11)+lx] = closeBlock(numLine+1,lx);
  }
}

function scrollLines(numLine) {
  for(var ly=numLine; ly>=1; ly--){
    for(var lx=0;lx<10;lx++) {
      pl1[(ly*11)+lx] = pl1[((ly-1)*11)+lx];
    }
  }
}

