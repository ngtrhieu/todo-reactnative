export default ms =>
  ms
    ? new Promise(resolve => setTimeout(resolve, ms))
    : new Promise(resolve => setImmediate(resolve));
