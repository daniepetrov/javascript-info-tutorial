// replace "for" with "while"

// let i = 0;

// while (i < 3) {
//   console.log(`number ${i}!`);
//   i++;
// }

// repeat until the input is correct

// let num;
// do {
//   num = prompt("Enter a number greater than 100?", 0);
// } while (num <= 100 && num);

// output prime numbers

function printPrimeNumbers(n) {
  nextPrime: for (let i = 0; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) continue nextPrime;
    }
    console.log(i);
  }
}

printPrimeNumbers(10);

function showPrimeNumbers(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
