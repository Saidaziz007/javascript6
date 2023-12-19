// func1

// function power(a, n) {
//   let res = a ** n;
//   return res;
// }
// console.log(power(3, 5));

// func2

// function mean(a, b) {
//   let am = (a + b) / 2;
//   let gm = Math.sqrt(a * b);

//   return { am, gm };
// }

// let result = mean(12, 48);
// console.log(result);

// func3

// function Sign(n) {
//   if (n < 0) {
//     return -1;
//   } else if (n > 0) {
//     return 1;
//   } else {
//     return 0;
//   }
// }

// console.log(Sign(10));

// func4

// function numberOfRoots(A, B, C) {
//   let D = B ** 2 - 4 * A * C;
//   if (D > 0) {
//     return 2;
//   } else if (D == 0) {
//     return 1;
//   } else D < 0;
//   return 0;
// }

// console.log(numberOfRoots(1, -6, 9));

// func5

// function areaCircle(R) {
//     const p = 3.14;
//     let S = p * R ** 2;
//     return S;
// }

// console.log(areaCircle(10));

// func6

// function sumRange(A, B) {
//   let sum = (A + B) / 2;
//   let res = A + sum + B;
//   if (A > B) {
//     return 0;
//   }
//   return res;
// }

// console.log(sumRange(8, 10));

// func7

// function calc(A, B, S) {
//   if (S === "-") {
//     return A - B;
//   } else if (S === "*") {
//     return A * B;
//   } else if (S === "/") {
//     return A / B;
//   } else if (S === "+") {
//     return A + B;
//   } else {
//     return 0;
//   }
// }

// console.log(calc(10, 15, "*"));
// console.log(calc(7, 8, "+"));

// func8

// function isEven(K) {
//     if (K % 2 == 0) {
//       return true;
//     } else {
//       K % 2 == 1;
//       return false;
//     }
// }

// console.log(isEven(10));

// func9

// function sortABC(a, b, c) {
//   let min = Math.min(a, b, c);
//   let max = Math.max(a, b, c);
//   let sum = a + b + c;
//   let res = sum - min - max;
//   console.log(" Eng kichkinasi " + min
//    + " Ortanchasi " + res + " Eng kattasi " + max);
// }
// sortABC(10, 5, 8);

// func10

// function isPowerN(K, N) {
//   if (K <= 0 || N <= 0) {
//     return false;
//   }
//   let res = 1;
//   while (res < K) {
//     res *= N;
//   }
//   return res === K;
// }

// console.log(isPowerN(125, 5));

//func11

// function isPrime(N) {
//   if (N <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(N); i++) {
//     if (N % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime(7));

//func12

// function isPrime(num) {
//   if (num <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// function numberOfPrime(N) {
//   let count = 0;

//   for (let i = 2; i <= N; i++) {
//     if (isPrime(i)) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(numberOfPrime(10));

// func13

// function digitNth(K, N) {
//   let d = "";
//   let count = 0;
//   let k = K;
//   let res;
//   while (k > 1) {
//     d += k % 10;
//     k = parseInt(k / 10);
//     count++;
//   }
//   if (count < N) {
//     return -1;
//   } else {
//     d = parseInt(+d / 10 ** (N - 1));
//     res = d % 10;
//     return res;
//   }
// }

// console.log(digitNth(105782, 5));
// console.log(digitNth(1057, 5));

// func14

// function inverseNumber(N) {
//   let res = 0;
//   while (N > 0) {
//     let digit = N % 10;
//     res = res * 10 + digit;
//     N = Math.floor(N / 10);
//   }
//   return res;
// }

// console.log(inverseNumber(56814));

// func15

// function inverseNumber(N) {
//   let res = 0;

//   while (N > 0) {
//     let d = N % 10;
//     res = res * 10 + d;
//     N = Math.floor(N / 10);
//   }

//   return res;
// }

// function isPalindrom(N) {
//   return N === inverseNumber(N);
// }

// console.log(isPalindrom(1678761));

// func16

// function factorial(N) {
//   if (N < 0) {
//     return 1;
//   }

//   let res = 1;
//   for (let i = 1; i <= N; i++) {
//     res *= i;
//   }

//   return res;
// }

// console.log(factorial(5));

// func17

// function getSum3(N) {
//   let sum = 0;

//   for (let i = 1; i <= N; i++) {
//     if (i % 3 === 0) {
//       sum += i;
//     }
//   }

//   return sum;
// }

// console.log(getSum3(15));

// func18

// function sumOddEven(N) {
//   let sOdd = 0;
//   let sEven = 0;

//   for (let i = 1; i <= N; i++) {
//     if (i % 2 === 0) {
//       sEven += i;
//     } else {
//       sOdd += i;
//     }
//   }

//   return [sOdd, sEven];
// }

// let res = sumOddEven(10);
// console.log(res[0], res[1]);

// func19

// function invertTime(H, M, S) {
//   let totalSecond = H * 3600 + M * 60 + S;
//   return totalSecond;
// }

// console.log(invertTime(0, 6, 40));

// func20

// function decTime(H, M, S) {
//   let totalSeconds = H * 3600 + M * 60 + S;
//   totalSeconds--;

//   let newH = Math.floor(totalSeconds / 3600);
//   let newM = Math.floor((totalSeconds % 3600) / 60);
//   let newS = totalSeconds % 60;

//   let formattedH = ('0' + newH).slice(-2);
//   let formattedM = ('0' + newM).slice(-2);
//   let formattedS = ('0' + newS).slice(-2);

//   return `${formattedH}:${formattedM}:${formattedS}`;
// }

// console.log(decTime(0, 6, 40));

// func21

// function isYear(Y) {
//   return (Y % 2 === 0 && Y % 100 !== 0) || Y % 400 === 0;
// }

// console.log(isYear(2024));
// console.log(isYear(2023));

// func22

// function isYear(Y) {
//   return (Y % 2 === 0 && Y % 100 !== 0) || Y % 400 === 0;
// }

// function monthDays(M, Y) {
//   const daysInMonth = [31, isYear(Y) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//   return daysInMonth[M - 2];
// }
// console.log(monthDays(3, 2021));
// console.log(monthDays(2, 2020));

// func23

// function isYear(Y) {
//   return (Y % 4 === 0 && Y % 100 !== 0) || Y % 400 === 0;
// }

// function mDays(M, Y) {
//   const daysMonth = [31, isYear(Y) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//   return daysMonth[M - 1];
// }

// function pDate(D, M, Y) {
//   if (D === 1) {
//     if (M === 1) {
//       M = 12;
//       Y--;
//     } else {
//       M--;
//     }
//     D = mDays(M, Y);
//   } else {
//     D--;
//   }

//   const fDay = ('0' + D).slice(-2);
//   const fMonth = ('0' + M).slice(-2);

//   return `${fDay}.${fMonth}.${Y}`;
// }

// console.log(pDate(10, 3, 2022));

// func24

// function isYear(Y) {
//   return (Y % 4 === 0 && Y % 100 !== 0) || Y % 400 === 0;
// }

// function monthDays(M, Y) {
//   const daysMonth = [31, isYear(Y) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//   return daysMonth[M - 1];
// }

// function nextDate(D, M, Y) {
//   const dayMonth = monthDays(M, Y);

//   if (D === dayMonth) {
//     if (M === 12) {
//       M = 1;
//       Y++;
//     } else {
//       M++;
//     }
//     D = 1;
//   } else {
//     D++;
//   }

//   const fDay = ('0' + D).slice(-2);
//   const fMonth = ('0' + M).slice(-2);

//   return `${fDay}.${fMonth}.${Y}`;
// }

// console.log(nextDate(10, 3, 2022));

// func25

// function getDividersNumberAndSum(N) {
//   let dCount = 0;
//   let dSum = 0;

//   for (let i = 1; i <= N; i++) {
//     if (N % i === 0) {
//       dCount++;
//       dSum += i;
//     }
//   }

//   return `${dCount}, ${dSum}`;
// }

// console.log(getDividersNumberAndSum(12));
