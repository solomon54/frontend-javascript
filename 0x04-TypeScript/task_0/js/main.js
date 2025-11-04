"use strict";

// 2. Create two students with explicit Student typing
const student1 = {
  firstName: "Solomon",
  lastName: "Tsehay",
  age: 23,
  location: "Addis Ababa, Ethiopia",
};
const student2 = {
  firstName: "Abebe",
  lastName: "Tsehay",
  age: 25,
  location: "bahir dar, Ethiopia",
};
// 2. Create an array named studentsList containing the two variables
const studentsList = [student1, student2];
// 3. Using Vanilla Javascript, render a table
// 4. For each element, append a new row containing first name and location
/**
 * Renders an HTML table of students to the body of the document.
 * @param students The array of students to render.
 */
const renderTable = (students) => {
  // 1. Create the table element
  const table = document.createElement("table");
  // 2. Create the table body
  const tableBody = document.createElement("tbody");
  // Create table header (Optional, but good practice)
  const tableHead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  const headers = ["First Name", "Last Name", "Age", "Location"];
  headers.forEach((headerText) => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
  });
  tableHead.appendChild(headerRow);
  table.appendChild(tableHead);

  // 3. Loop through studentsList and create rows
  students.forEach((student) => {
    // Create a new table row
    const row = document.createElement("tr");
    // first name cell
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);
    // last name cell
    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = student.lastName;
    row.appendChild(lastNameCell);

    // age cell
    const ageCell = document.createElement("td");
    ageCell.textContent = student.age;
    row.appendChild(ageCell);

    //location cell
    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(locationCell);
    // Append the row to the table body
    tableBody.appendChild(row);
  });
  // 4. Assemble and append the table to the document body
  table.appendChild(tableBody);
  document.body.appendChild(table);
};
// Execute the rendering function
renderTable(studentsList);
//# sourceMappingURL=main.js.map
