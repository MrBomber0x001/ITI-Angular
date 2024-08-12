function fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            const tableBody = document.querySelector('#usersTable tbody');
            tableBody.innerHTML = '';
            users.forEach(user => {
                const row = `
                    <tr>
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td><button onclick="viewDetails(${user.id})">View Details</button></td>
                    </tr>
                `;
                tableBody.innerHTML += row;
            });
        })
        .catch(error => console.error('Error fetching users:', error));
}

function viewDetails(userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            document.getElementById('detailName').textContent = user.name;
            document.getElementById('detailEmail').textContent = user.email;
            document.getElementById('detailAddress').textContent = `${user.address.street}, ${user.address.city}`;
            document.getElementById('detailCompany').textContent = user.company.name;
            document.getElementById('detailUsername').textContent = user.username;
        })
        .catch(error => console.error('Error fetching user details:', error));
}

fetchUsers();