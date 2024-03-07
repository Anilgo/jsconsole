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