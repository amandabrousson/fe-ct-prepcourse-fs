function esEntero(num) {
   // Retornar true si "num" es un entero, ya sea positivo, negativo o cero.
   // Ejemplo: 0.8   ---> false
   // Ejemplo: 1     ---> true
   // Ejemplo: (-10) ---> true
   // De lo contrario, retorna false.
   // Tu código:
   if (num % 1 === 0 && num >= 0 || num <= 0 ){
      console.log('true');
   } else 
      console.log('false');
}
esEntero(10.8);
