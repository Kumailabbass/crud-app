    const API_URL = 'http://localhost:3000/users';
    const tableBody = document.getElementById('userTableBody');
    const form = document.getElementById('userForm');

    // Load all users
    async function loadUsers() {
      const res = await fetch(API_URL);
      const users = await res.json();

      tableBody.innerHTML = '';
      users.forEach(user => {
        tableBody.innerHTML += `
          <tr>
            <td>${user.id}</td>
            <td><input value="${user.name}" onchange="editUser(${user.id}, this.value, 'name')"></td>
            <td><input value="${user.email}" onchange="editUser(${user.id}, this.value, 'email')"></td>
            <td>
              <button onclick="deleteUser(${user.id})">Delete</button>
            </td>
          </tr>
        `;
      });
    }

    // Add user
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;

      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email })
      });

      form.reset();
      loadUsers();
    });

    // Delete user
    async function deleteUser(id) {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      loadUsers();
    }

    // Edit user
    async function editUser(id, value, field) {
      const row = tableBody.querySelector(`tr td:first-child:contains('${id}')`).parentNode;
      const name = row.children[1].children[0].value;
      const email = row.children[2].children[0].value;

      await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email })
      });

      loadUsers();
    }

    loadUsers();
