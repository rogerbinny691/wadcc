

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form data
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
  
    // Create user object
    const user = { username, email };
  
    // Get existing users from localStorage or initialize empty array
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    // Push new user to the array
    users.push(user);
  
    // Store updated users array in localStorage
    localStorage.setItem('users', JSON.stringify(users));
  
    // Redirect to new page to display registered users
    window.location.href = 'registered_users.html';
  }
  
  // Attach form submission event listener
  document.getElementById('registrationForm').addEventListener('submit', handleSubmit);