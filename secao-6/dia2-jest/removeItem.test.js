const removeItem = require('./removeItem.js');

describe('Testa a função myRemove', () => {
  it('Deve retornar um array removendo o item esperado', () => {
    expect(removeItem([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(removeItem([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(removeItem([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});