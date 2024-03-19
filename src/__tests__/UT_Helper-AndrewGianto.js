//Tempat untuk testing fungsi dari function.js menggunakan JEST

//Memasukkan functions yang ada dari functions.js
const { add, multiply } = require('../functions');

//Function Tambah
describe('add', () => {
  //Unit Testing 1
  it('adds two positive numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });
  //Unit Testing 2
  it('adds a positive and a negative number correctly', () => {
    expect(add(2, -3)).toBe(-1);
  });
  //Unit Testing 3
  it('adds two negative numbers correctly', () => {
    expect(add(-10, -3)).toBe(-13);
  });
});

//Function perkalian
describe('multiply', () => {
  //Unit Testing 4
  it('multiplies two positive numbers correctly', () => {
    expect(multiply(2, 3)).toBe(6);
  });
  //Unit Testing 5
  it('multiplies a positive and a negative number correctly', () => {
    expect(multiply(2, -3)).toBe(-6);
  });
  //Unit Testing 6
  it('multiplies two negative number correctly', () => {
    expect(multiply(-2, -3)).toBe(6);
  });
});
