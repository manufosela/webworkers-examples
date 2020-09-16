function runTest2() {
  document.getElementById('result').innerHTML = 'Test 2. Calculando números primos...';
  const buffer = new ArrayBuffer(1024 * 1024 * 10); // reserves 10 MB
  let view = new Uint8Array(buffer); // view the buffer as bytes

  performance.mark('testStart');
  const worker = new Worker('prime-worker2.js', { type: 'module' });
  worker.onmessage = function(msg) {
    view.set(new Uint8Array(msg.data.buffer), msg.data.buffer);
    performance.mark('testEnd');
    performance.measure('runTest', 'testStart', 'testEnd');
    const timeTaken = performance.getEntriesByName('runTest')[0].duration;
    document.getElementById('result').innerHTML = `Terminado. Encontrados ${msg.data.numPrimes} números primos en ${timeTaken / 1000} s`;
    console.log(msg.data.numPrimes, view);
    view.set(new Uint8Array(buffer), 0);
  };
  worker.postMessage(buffer);
}

document.querySelector('#button2').addEventListener('click', runTest2);