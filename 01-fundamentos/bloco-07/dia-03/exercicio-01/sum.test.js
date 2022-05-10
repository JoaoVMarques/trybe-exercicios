const sum = require('./sum');

describe('function sum', ()  => {
  test('A soma entre 4 e 5 deve retornar 9.', ()  => {
    expect(sum(4, 5)).toBe(9);
  });

  test('A soma entre 0 e 0 deve retornar 0.', () => {
    expect(sum(0,0)).toBe(0);
  })

  test('Caso algum número seja passado como string deve retornar um erro', () => {
    expect(() => sum(4, "5")).toThrow('parameters must be numbers');
  })
});