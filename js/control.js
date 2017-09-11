onkeydown = function(e){
    code = e.keyCode;
    //top
    if(code == 38  || code == 87){
        keys[code] = true;
    }

    //down
    if(code == 40 || code == 83){
        keys[code] = true;
    }

    //left
    if(code == 37 || code == 65){
        keys[code] = true;
    }

    //right
    if(code == 39 || code == 68){
        keys[code] = true;
    }

    //space, x , X
    if (code == 32 || code == 120 || code == 88){
      if (s != 2) s++;
      if (s > 3){
        localX = 700;
        localX2 = -900;
        s = 0;
        } 
    }
}



onkeyup = function(e){
    code = e.keyCode;
    //top
    if(code == 38  || code == 87){
        keys[code] = false;
    }

    //down
    if(code == 40 || code == 83){
        keys[code] = false;
    }

    //left
    if(code == 37 || code == 65){
        keys[code] = false;
    }

    //right
    if(code == 39 || code == 68){
        keys[code] = false;
    }
}
