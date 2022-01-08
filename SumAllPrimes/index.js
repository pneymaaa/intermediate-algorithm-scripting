// function sumPrimes(num) {
//     let currNum = 2;
//     let result = 0;
//     while (currNum <= num) {
//         let isPrime = true;
//         for (let i = 2; i < currNum; i++) {
//             if (currNum % i == 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) {
//             result += currNum;
//         }
//         currNum++;
//     }

//     return result;
// }

// function sumPrimes(num) {
//     function isPrime(num) {
//         for (let i = 2; i <= Math.sqrt(num); i++) {
//             if (num % i == 0)
//                 return false;
//         }
//         return true;
//     }

//     let sum = 0;
//     for (let j = 2; j <= num; j++) {
//         if (isPrime(j))
//             sum += 1;
//     }

//     return sum;
// }


function sumPrimes(num) {
   let primes = [];
   for (let i = 2; i <= num; i++) {
       if(primes.every((prime) => i % prime != 0))
       primes.push(i);
   }

   return primes.reduce((prev,val) => prev + val, 0);
}

console.log(sumPrimes(10));
  //return 2,3,5,7 => 17