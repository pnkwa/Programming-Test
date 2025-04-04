interface Employee {
  name: string
  position: string
}

function findEmployee(employees: Employee[], targetName: string): string {
  const employee = employees.find((emp) => emp.name === targetName)

  return employee
    ? `Name ${employee.name} position ${employee.position}`
    : `Employee with name ${targetName} not found.`
}

const employees = [
  { name: 'Arm', position: 'Front End' },
  { name: 'Game', position: 'Back End' },
]

console.log(findEmployee(employees, 'Janny'))
console.log(findEmployee(employees, 'Game'))
