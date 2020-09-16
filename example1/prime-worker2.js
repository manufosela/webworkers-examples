import { calculatePrimes } from './calculatePrimes.js';

self.onmessage = function(msg) {
  const view = new Uint8Array(msg.data);
  const numPrimes = calculatePrimes(view);
  self.postMessage({
    buffer: view.buffer,
    numPrimes: numPrimes
  });
};