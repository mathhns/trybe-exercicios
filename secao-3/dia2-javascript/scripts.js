let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let oddNumber = [];

for (let index = 0; index < numbers.length; index += 1){
  if(numbers[index] % 2 !== 0){
    oddNumber.push(numbers[index]);
  }
}
if (oddNumber.length === 0){
  console.log('Nenhum número ímpar encontrado');
} else {
  console.log(oddNumber.length);
}