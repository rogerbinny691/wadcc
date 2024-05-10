// Retrieve users from localStorage
const users = JSON.parse(localStorage.getItem('users')) || [];

// Display users on the page
const userList = document.getElementById('userList');
users.forEach(user => {
  const listItem = document.createElement('li');
  listItem.textContent = `Username: ${user.username}, Email: ${user.email}`;
  userList.appendChild(listItem);
});