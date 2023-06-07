const validateInfo = (name, age) => {
  if (!name || !age) {
    throw new Error("Todas as informações são necessárias");
  }
};

const validateLegalAge = (age) => {
  if (age < 18 || isNaN(age)) {
    throw new Error(
      "Ops, infelizmente você precisa ser maior de 18 anos ou inserir uma idade válida."
    );
  }
};

const studentRegister = (name, age) => {
  try {
    validateInfo(name, age);
    validateLegalAge(age);
    return `${name}, boas-vindas à AuTrybe!`;
  } catch (error) {
    return error.message;
  }
};

console.log(studentRegister("Carlos", 18));
console.log(studentRegister("André", 17));
console.log(studentRegister("Renan", 'Arlindo'));
