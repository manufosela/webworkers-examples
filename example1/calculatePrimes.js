import { isPrime } from './isPrime.js';

export function calculatePrimes(view) {
  let numPrimes = 0;
  for (let i = 0; i < view.length; i++) {
    const primeCandidate = i + 2; // 2 is the smalles prime number
    const result = isPrime(primeCandidate);
    if (result) {
      numPrimes++;
    }
    view[i] = result;
  }
  return numPrimes;
}