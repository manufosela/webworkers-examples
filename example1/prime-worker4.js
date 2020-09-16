import { isPrime } from './isPrime.js';

self.onmessage = function(msg) {
  const view = new Uint8Array(msg.data.length);
  let numPrimes = 0;

  // calculatePrimes
  for (let i = 0; i < msg.data.length; i++) {
    const primeCandidate = i + msg.data.offset + 2; // 2 is the smalles prime number
    const result = isPrime(primeCandidate);
    if (result) {
      numPrimes++;
    }
    view[i] = result;
  }

  self.postMessage({
    buffer: view.buffer,
    numPrimes: numPrimes,
    offset: msg.data.offset,
    length: msg.data.length
  }, [ view.buffer ]);
};