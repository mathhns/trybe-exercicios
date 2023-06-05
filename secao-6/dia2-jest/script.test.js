const sum = require('./script');

it('Verifica se a soma de 1 e 2 é igual a 3', () => {
  expect(sum(1, 2)).toBe(3);
})