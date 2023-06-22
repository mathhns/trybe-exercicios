const { countries } = require('./data.js');

//1
const getPopulation = () => countries
  .reduce((acc, curr) => acc + curr.population, 0);

console.log(getPopulation());

//2
const getTotalArea = () => countries
  .reduce((acc, curr) => acc + curr.area, 0);

console.log(getTotalArea());

//3
const longestName = () => countries.reduce((acc, curr) =>
  acc.name.length > curr.name.length ? acc : curr);

console.log(longestName());