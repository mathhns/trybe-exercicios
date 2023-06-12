const removeBebida = require('./script');

describe('Remove sabor de bebida', () => {
  const bebidas = ['coca-cola', 'sukita', 'água', 'garapa', 'suco de laranja', 'groselha'];
  it('Remove água', () => {
    expect(['coca-cola', 'sukita', 'garapa', 'suco de laranja', 'groselha']).
      toEqual(removeBebida(bebidas, 'água'));
  });
  it('Remove garapa', () => {
    const bebidas = ['coca-cola', 'sukita', 'água', 'garapa', 'suco de laranja', 'groselha'];
    expect(['coca-cola', 'sukita', 'água', 'suco de laranja', 'groselha']).
      toEqual(removeBebida(bebidas, 'garapa'));
  });
  it('Remove groselha caso tenha', () => {
    const bebidas = ['coca-cola', 'sukita', 'água', 'garapa', 'suco de laranja', 'groselha'];
    expect(removeBebida(bebidas, 'groselha')).not.toContain('groselha');
  });
});