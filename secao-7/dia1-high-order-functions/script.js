const newEmployees = () => {
  const employees = {
    id1: employeeGenerator('Pedro Guerra'), 
    id2: employeeGenerator('Luiza Drumond'), 
    id3: employeeGenerator('Carla Paiva'), 
  }
  return employees;
};

const employeeGenerator = (fullName) => {
  const email = fullName.toLowerCase().replace(' ', '_');

  return { fullName, email: `${email}@trybe.com` };
};

console.log(newEmployees());