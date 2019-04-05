var con = 0 ;
función  inputString ( cad ) {
    sea res = ' ' ;
    while (con < cad . length ) {
      deja c = cad . charAt (con);
      si (c == ' ( ' ) {
        con ++ ;
        res + = añadir (cad);
      } else {
        res + = c;
      }
      con ++ ;
    }
    volver res;
}
const  add = ( cad ) => {
    // console.log ("cadena recursiva" + cad);
    sea res = ' ' ;
    while (con < cad . length ) {
      deja c = cad . charAt (con);
      si (c == ' ( ' ) {
        con ++ ;
        res + = añadir (cad);
      } else  if (c == ' ) ' ) {
        res = volteo (res);
        volver res;
      } else {
        res + = c;
      }
      con ++ ;
    }
    volver res;

}
función  volteo ( cad ) {
  deja sum = ' ' ;
  para ( sea i = cad . length - 1 ; i > = 0 ; i - ) {
    deja c = cad . carácter (i);
    suma + = c;
  }
  suma de retorno
}


consola . log ( "ejercicio_3 inputString: " + inputString ( " foo (bar (baz)) blim " ));
