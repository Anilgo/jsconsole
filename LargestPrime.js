// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the given number?

function largestPrime(num) {
    let i=2;
    while (i<= num){
      if (num % i ==0)
        num = num/i;
      else i++;
    }
    return i;

  }

  console.log(largestPrime(13195));