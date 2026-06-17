let employees = [];

function addEmployee() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let salary = Number(document.getElementById("salary").value);
    let dept = document.getElementById("dept").value;

    if (!name || !id || !salary || !dept) {
        alert("Fill all fields");
        return;
    }

    employees.push({ name, id, salary, dept });

    alert("Employee Added");

    document.getElementById("name").value = "";
    document.getElementById("id").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("dept").value = "";
}

function displayAll() {
    let output = "";
    employees.forEach(emp => {
        output += `${emp.name} - ${emp.salary} - ${emp.dept}<br>`;
    });
    document.getElementById("output").innerHTML = output;
}

function highSalary() {
    let output = "";
    employees.filter(emp => emp.salary > 50000)
        .forEach(emp => {
            output += `${emp.name} - ${emp.salary}<br>`;
        });
    document.getElementById("output").innerHTML = output;
}

function totalSalary() {
    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    document.getElementById("output").innerHTML = "Total Salary: " + total;
}

function avgSalary() {
    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    let avg = employees.length ? total / employees.length : 0;
    document.getElementById("output").innerHTML = "Average Salary: " + avg;
}

function countDept() {
    let deptCount = {};

    employees.forEach(emp => {
        deptCount[emp.dept] = (deptCount[emp.dept] || 0) + 1;
    });

    let output = "";
    for (let dept in deptCount) {
        output += `${dept}: ${deptCount[dept]}<br>`;
    }

    document.getElementById("output").innerHTML = output;
}