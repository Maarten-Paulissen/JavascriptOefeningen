const employees = [
  { name: "Eva", country: "Nederland" },
  { name: "John", country: "België" },
];

const employeeInNetherlands = employees.find(
  (employee) => employee.country === "Nederland"
);

if (employeeInNetherlands) {
  console.log(
    `Werknemer  ${employeeInNetherlands.name} werkt in ${employeeInNetherlands.country}`
  );
} else {
  console.log("Geen werknemer gevonden");
}
