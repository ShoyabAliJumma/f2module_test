const students = [
    { ID: 1, name: 'Alice', age: 21, grade: 'A', degree: 'Btech', email: 'alice@example.com' },
    { ID: 2, name: 'Bob', age: 22, grade: 'B', degree: 'MBA', email: 'bob@example.com' },
    { ID: 3, name: 'Charlie', age: 20, grade: 'C', degree: 'Arts', email: 'charlie@example.com' }
  ];
  
  // Display students in the table
  function displayStudents() {
    const tableBody = document.getElementById('studentTableBody');
    tableBody.innerHTML = '';
  
    students.forEach(student => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${student.ID}</td>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.grade}</td>
        <td>${student.degree}</td>
        <td>${student.email}</td>
        <td><button onclick="editStudent(${student.ID})">Edit</button></td>
        <td><button onclick="deleteStudent(${student.ID})">Delete</button></td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  // Add a new student
  function addStudent(event) {
    event.preventDefault();
  
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const gradeInput = document.getElementById('grade');
    const degreeInput = document.getElementById('degree');
    const emailInput = document.getElementById('email');
  
    const newStudent = {
      ID: students.length + 1,
      name: nameInput.value,
      age: parseInt(ageInput.value),
      grade: gradeInput.value,
      degree: degreeInput.value,
      email: emailInput.value
    };
  
    students.push(newStudent);
    displayStudents();
  
    // Clear form inputs
    nameInput.value = '';
    ageInput.value = '';
    gradeInput.value = '';
    degreeInput.value = '';
    emailInput.value = '';
  }
  
  // Edit a student
  function editStudent(studentID) {
    const student = students.find(s => s.ID === studentID);
    if (student) {
      const nameInput = document.getElementById('name');
      const ageInput = document.getElementById('age');
      const gradeInput = document.getElementById('grade');
      const degreeInput = document.getElementById('degree');
      const emailInput = document.getElementById('email');
      const addButton = document.querySelector('#addStudentForm button[type="submit"]');
  
      nameInput.value = student.name;
      ageInput.value = student.age;
      gradeInput.value = student.grade;
      degreeInput.value = student.degree;
      emailInput.value = student.email;
  
      addButton.textContent = 'Edit Student';
      addButton.onclick = function() {
        updateStudent(studentID);
      };
    }
  }
  
  // Update a student
  function updateStudent(studentID) {
    const student = students.find(s => s.ID === studentID);
    if (student) {
      const nameInput = document.getElementById('name');
      const ageInput = document.getElementById('age');
      const gradeInput = document.getElementById('grade');
      const degreeInput = document.getElementById('degree');
      const emailInput = document.getElementById('email');
      const addButton = document.querySelector('#addStudentForm button[type="submit"]');
  
      student.name = nameInput.value;
      student.age = parseInt(ageInput.value);
      student.grade = gradeInput.value;
      student.degree = degreeInput.value;
      student.email = emailInput.value;
  
      addButton.textContent = 'Add Student';
      addButton.onclick = addStudent;
  
      // Clear form inputs
      nameInput.value = '';
      ageInput.value = '';
      gradeInput.value = '';
      degreeInput.value = '';
      emailInput.value = '';
  
      displayStudents();
    }
  }
  
  // Delete a student
  function deleteStudent(studentID) {
    const studentIndex = students.findIndex(s => s.ID === studentID);
    if (studentIndex !== -1) {
      students.splice(studentIndex, 1);
      displayStudents();
    }
  }
  
  // Search students by name, email, or degree
  function searchStudents() {
    const searchInput = document.getElementById('searchInput');
    const searchValue = searchInput.value.toLowerCase();
  
    const filteredStudents = students.filter(student =>
      student.name.toLowerCase().includes(searchValue) ||
      student.email.toLowerCase().includes(searchValue) ||
      student.degree.toLowerCase().includes(searchValue)
    );
  
    displayFilteredStudents(filteredStudents);
  }
  
  // Display filtered students
  function displayFilteredStudents(filteredStudents) {
    const tableBody = document.getElementById('studentTableBody');
    tableBody.innerHTML = '';
  
    filteredStudents.forEach(student => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${student.ID}</td>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.grade}</td>
        <td>${student.degree}</td>
        <td>${student.email}</td>
        <td><button onclick="editStudent(${student.ID})">Edit</button></td>
        <td><button onclick="deleteStudent(${student.ID})">Delete</button></td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  // Initial display of students
  displayStudents();
  
  // Add event listener to the form submit button
  document.getElementById('addStudentForm').addEventListener('submit', addStudent);
  