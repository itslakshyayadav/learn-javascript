const employees = [
  { name: "John", age: 30, empId: 101 },
  { name: "Peter", age: 24, empId: 102 },
  { name: "Tom", age: 40, empId: 103 },
  { name: "Jerry", age: 20, empId: 104 },
];

function enrollEmployee(name, age) {
  const newEmpId = employees.reduce((max, employee) => {
    return Math.max(max, employee.empId);
  }, 0);
  const employee = {
    name,
    age,
    empId: newEmpId + 1,
  };
  employees.push(employee);
  return employee;
}

const newEmployee = enrollEmployee("Mary", 25);
console.log(employees, newEmployee);
const NewEmployee = enrollEmployee("jerry", 95);
console.log(employees, NewEmployee);

// find maximum number of this array in java script
const arr = [25, 65, 47, 49, 78, 98];

let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max);

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);
