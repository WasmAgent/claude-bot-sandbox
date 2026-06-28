export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return Math.round(a * b * 1e10) / 1e10;
}

export function divide(a, b) {
  if (b === 0) {
    throw new Error('division by zero');
  }
  return a / b;
}
