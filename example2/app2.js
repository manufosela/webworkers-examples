const size = Uint8Array.BYTES_PER_ELEMENT * 1024 * 1024 * 10;

// Create a sharedarraybuffer
const sharedBuffer = new SharedArrayBuffer(size);
const view = new Uint8Array(sharedBuffer);

function runTest2() {
  document.getElementById('result').innerHTML = 'Test 2. Calculando números primos...';

  // Get the size we want in bytes for the buffer
  performance.mark('testStart');
  const worker = new Worker('prime-worker2.js', { type: 'module' });
  worker.onmessage = function(msg) {
    performance.mark('testEnd');
    performance.measure('runTest', 'testStart', 'testEnd');
    const timeTaken = performance.getEntriesByName('runTest')[0].duration;
    document.getElementById('result').innerHTML = `Terminado. Encontrados ${msg.data.numPrimes} números primos en ${timeTaken / 1000} s`;
    console.log(msg.data.done, view);
  };
  worker.postMessage(sharedBuffer);
}

document.querySelector('#button2').addEventListener('click', runTest2);