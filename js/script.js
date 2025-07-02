// dichiarazione variabili


//logica

for (let i = 1; i <= 100; i++) {
  // controllo se è multiplo di 3 e 5
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`FizzBuzz`);
  }
  // controllo se è mulitplo SOLO di 3 
  else if (i % 3 === 0) {
    console.log(`Fizz`);
  }
  // controllo se è mulitplo SOLO di 5
  else if (i % 5 === 0) {
    console.log(`Buzz`);
  }
  //altrimenti stampo i
  else {
    console.log(i);
  }
}