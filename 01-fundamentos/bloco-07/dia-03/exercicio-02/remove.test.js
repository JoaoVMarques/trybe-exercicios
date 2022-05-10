const myRemove = require('./remove');

describe('function myRemove', ()  => {
  test('verificar se a myRemove retorna o array [1, 2, 3, 4]', ()  => {
    arr = [1, 2, 3, 4];
    expect(myRemove(arr, 3)).not.toContain(3);
  });
});