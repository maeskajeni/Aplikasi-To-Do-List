$(document).ready(function () {
    // Function to load all employee data
    function loadEmployees() {
        $.ajax({
            url: '/api/employees',
            type: 'GET',
            success: function (employees) {
                var tableBody = $('#employeeTableBody');
                tableBody.empty();
                $.each(employees, function (index, employee) {
                    tableBody.append(`<tr>
                        <td>${index + 1}</td>
                        <td>${employee.nik}</td>
                        <td>${employee.fullName}</td>
                        <td>${employee.age}</td>
                        <td>${new Date(employee.birthDate).toLocaleDateString()}</td>
                        <td>${employee.gender}</td>
                        <td>${employee.address}</td>
                        <td>${employee.country}</td>
                        <td>
                            <button onclick="editEmployee(${employee.id})" class="btn btn-info btn-sm">Edit</button>
                            <button onclick="deleteEmployee(${employee.id})" class="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>`);
                });
            }
        });
    }

    // Load employees when page is loaded
    loadEmployees();

    // Add, Edit, and Delete button functions can go here
});
