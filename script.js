let employees = [];

const updateTable = () => {
    const tbody = document.getElementById("employee-list");
    tbody.innerHTML = "";
    let totalSalary = 0; // Initialize total salary variable

    employees.map(employee => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${employee.name}</td>
            <td>${employee.jobRole}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>
            <td>${employee.email}</td>
            <td>${employee.experience}</td>
            <td>${employee.experience > 5 ? 'Senior' : 'Junior'}</td>
            <td><button onclick="deleteEmployee(this)">Delete</button></td>
        `; 
        tbody.appendChild(tr);
        totalSalary += parseFloat(employee.salary); // Add employee's salary to total
    });

    updateTotalEmployees();
    updateTotalSalary(totalSalary); // Update total salary
};

const addEmployee = (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const jobRole = document.getElementById('job-role').value;
    const department = document.getElementById('department').value;
    const salary = document.getElementById('salary').value;
    const email = document.getElementById('email').value;
    const experience = document.getElementById('experience').value;

    const employee = { name, jobRole, department, salary, email, experience };
    employees.push(employee);

    updateTable();
    e.target.reset();
};

const deleteEmployee = (button) => {
    const row = button.closest('tr');
    const index = row.rowIndex - 1;
    employees.splice(index, 1);
    updateTable();
};

const deleteAllEmployees = () => {
    employees = [];
    updateTable();
};

const updateTotalEmployees = () => {
    document.getElementById("total-employees").textContent = employees.length;
};

const updateTotalSalary = (totalSalary) => {
    document.getElementById("total-salary").textContent = totalSalary.toFixed(2); // Display total salary
};

document.getElementById("employee-form").addEventListener("submit", addEmployee);
document.getElementById("deleteAll").addEventListener("click", deleteAllEmployees);
