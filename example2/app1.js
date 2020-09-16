// main.js
const worker = new Worker('worker1.js');
const length = 10;
const size = Int32Array.BYTES_PER_ELEMENT * length;

// Create a buffer for 10 integers
const sharedBuffer = new SharedArrayBuffer(size);
const sharedArray = new Int32Array(sharedBuffer);
for (let i = 0; i < 10; i++) {
  Atomics.store(sharedArray, i, 0);
  console.log(`The item at array index ${i} is 0 (main process)`);
}
worker.postMessage(sharedBuffer);