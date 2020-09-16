self.addEventListener('message', (event) => {
  const sharedArray = new Int32Array(event.data);
  for (let i = 0; i < 10; i++) {
    setTimeout(()=> {
      Atomics.store(sharedArray, i, i ** i);
      self.postMessage({done: true, pos: i});
    }, (i * 2 + 5) * 1000);
  }
}, false);