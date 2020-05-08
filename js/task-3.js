const findBestEmployee = function(employees) {
  const nameOfEmployees = Object.keys(employees);
  let bestResult = 0;
  let bestEmployee;

  // eslint-disable-next-line
  for (let key of nameOfEmployees) {
    if (bestResult < employees[key]) {
      bestResult = employees[key];
      bestEmployee = key;
    }
  }
  return bestEmployee;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
