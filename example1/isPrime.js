export function isPrime(candidate) {
  for (let n = 2; n <= Math.floor(Math.sqrt(candidate)); n++) {
    if (candidate % n === 0) {
      return false;
    }
  }
  return true;
}