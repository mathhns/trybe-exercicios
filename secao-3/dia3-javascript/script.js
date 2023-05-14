let saldo = 1000;

function somaSaldo(valor){
  return saldo + valor;
}
function subtraiSaldo(valor){
  return saldo - valor;
}
function multiplicaSaldo(valor){
  return saldo * valor;
}
function divideSaldo(valor) {
  return saldo / valor;
}

console.log(somaSaldo(200));
console.log(subtraiSaldo(123));
console.log(multiplicaSaldo(4));
console.log(divideSaldo(3));
