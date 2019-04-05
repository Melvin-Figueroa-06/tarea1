función  exerciseElaboration ( p , n ) {
    n + = 1 ;
    var sum = p;
    mientras que (n - ! = 0 ) {
      suma * = 10 ;
    }
    suma + = p;
    suma = matemáticas . pow (suma, 2 );
    p = 0 ;
    while (suma > 0 ) {
      p + = suma % 10 ;
      suma = parseInt (suma / = 10 );
    }
    volver p;
}

consola . log ( "ejercicio_5 exerciseElaboration: " + exerciseElaboration ( 1 , 2 ));
