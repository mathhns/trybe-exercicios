const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const lettersArray = names.join('').toLowerCase().split('');
console.log(lettersArray);

const count = () => lettersArray.reduce((acc, curr) => 
  curr === 'a' ? acc += 1 : acc, 0);

  console.log(`O resultado é ${count()}`);
