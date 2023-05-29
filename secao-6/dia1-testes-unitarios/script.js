const sum = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    value1 = parseFloat(value1);
    value2 = parseFloat(value2);

    if (isNaN(value1) || isNaN(value2)) {
      return 'Ambos os valores devem ser números válidos.';
    }
  }

  return value1 + value2;
};

console.log(sum(2, '3'));