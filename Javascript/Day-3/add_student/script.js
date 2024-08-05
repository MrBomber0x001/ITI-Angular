let studentId = 1;

function addStudent() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    if (name && age) {
        const table = document.getElementById('studentsTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        const idCell = newRow.insertCell(0);
        const nameCell = newRow.insertCell(1);
        const ageCell = newRow.insertCell(2);
        const actionCell = newRow.insertCell(3);

        idCell.textContent = studentId++;
        nameCell.textContent = name;
        ageCell.textContent = age;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function () {
            table.deleteRow(newRow.rowIndex - 1);
        };

        actionCell.appendChild(removeButton);

        // Clear the form inputs
        document.getElementById('name').value = '';
        document.getElementById('age').value = '';
    } else {
        alert('Please fill in both name and age fields.');
    }
}