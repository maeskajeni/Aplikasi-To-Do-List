// Fungsi menyimpan data form ke localStorage
document.getElementById('addPersonForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form submit secara default

    const newPerson = {
        nik: document.getElementById('nik').value,
        fullName: document.getElementById('fullName').value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        birthDate: document.getElementById('birthDate').value,
        address: document.getElementById('address').value,
        country: document.getElementById('country').value
    };

    // Ambil data dari localStorage jika ada, atau buat array baru
    let peopleData = JSON.parse(localStorage.getItem('peopleData')) || [];
    peopleData.push(newPerson);

    // Simpan data yang baru ke localStorage
    localStorage.setItem('peopleData', JSON.stringify(peopleData));

    // Kembali ke halaman utama
    window.location.href = 'index.html';
});
