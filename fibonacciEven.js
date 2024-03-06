function fiboEvenSum(n) {
    let fib = []; 
    if (n >= 2)
      fib = [1,2];
    else if (n === 1)
      fib = [1];
    else if (n === 0)
      fib = [0];
    for (let i = 2; i<=n; i++){
        if ((fib[i-1] + fib[i-2])<=n && (fib[i-1] + fib[i-2]))
        fib.push(fib[i-1] + fib[i-2]);    
    }

    let temp = 0 ;
    fib.forEach(a => {if (a % 2 ===0 ) temp += a} )
    return temp;
}

  console.log(fiboEvenSum(34));