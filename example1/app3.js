function runTest3() {
  document.getElementById('result').innerHTML = 'Test 3. Calculando números primos...';
  const buffer = new ArrayBuffer(1024 * 1024 * 10); // reserves 10 MB
  const view = new Uint8Array(buffer); // view the buffer as bytes

  performance.mark('testStart');
  const worker = new Worker('prime-worker3.js', { type: 'module'});
  worker.onmessage = function(msg) {
    performance.mark('testEnd');
    performance.measure('runTest', 'testStart', 'testEnd');
    const timeTaken = performance.getEntriesByName('runTest').slice(-1)[0].duration;
    document.getElementById('result').innerHTML = `Terminado. Encontrados ${msg.data.numPrimes} números primos en ${timeTaken / 1000} s`;
    console.log(msg.data.numPrimes, msg.data.buffer);
  };
  worker.postMessage(buffer, [ view.buffer ]);
}

document.querySelector('#button3').addEventListener('click', runTest3);
