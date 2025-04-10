$(document).ready(function() {
    // Ambil data dari localStorage dan tampilkan di tabel
    const peopleData = JSON.parse(localStorage.getItem('peopleData')) || [];
    
    peopleData.forEach((person, index) => {
        $('#employeeTableBody').append(`
            <tr>
                <td>${index + 1}</td>
                <td>${person.nik}</td>
                <td>${person.fullName}</td>
                <td>${calculateAge(person.birthDate)}</td>
                <td>${person.birthDate}</td>
                <td>${person.gender}</td>
                <td>${person.address}</td>
                <td>${person.country}</td>
                <td><button class="btn btn-danger delete-btn" data-index="${index}">Delete</button></td>
            </tr>
        `);
    });
    
    // Fungsi menghapus data
    $('.delete-btn').click(function() {
        const index = $(this).data('index');
        peopleData.splice(index, 1);
        localStorage.setItem('peopleData', JSON.stringify(peopleData));
        location.reload();
    });
    
    // Fungsi menghitung umur dari tanggal lahir
    function calculateAge(birthDate) {
        const birth = new Date(birthDate);
        const today = new Date();
        let age = today.getFullYear() - birth.getFullYear();
        const m = today.getMonth() - birth.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
            age--;
        }
        return age;
    }
});
