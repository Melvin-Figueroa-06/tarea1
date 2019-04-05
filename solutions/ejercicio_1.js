función  matrix () {
  matriz var = [[ 0 , 1 , 1 , 2 ],
                [ 0 , 5 , 0 , 0 ],
                [ 2 , 0 , 3 , 3 ]];
  var suma = 0 ;
  para ( var i = 0 ; i < 3 ; i ++ ) {
    para ( var j = 0 ; j < 4 ; j ++ ) {
      suma + = matriz [i] [j];
    }
  }
  suma de retorno
}
/ * función probar (vec, i) {
    if (i <vec.length) {
      //console.log(i);
      probar (vec, i + 1);
      console.log (vec [i]);
    }
}

consola . log ( " ejercicio matrix: " + matrix ());
// probar ([1,2,3,4], 0);
