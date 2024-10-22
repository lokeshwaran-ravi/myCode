const fs = require('fs');
const path = require('path');
const example_data_path = path.join(__dirname, '../user_details.json');
// const { validateEmail, validatePhoneNumber } = require('./validators'); // Assume these functions are implemented in a validators file

const signUp = async (req, res) => {
  try {
    const user_information = require(example_data_path).user_details;
    const { username, password, email, firstName, lastName, phone } = req.body;

    // Validate inputs
    if (!username || !password || !email || !firstName || !lastName || !phone) {
      return res.status(400).send("All fields are required!");
    }
    if (password.length < 6) {
      return res.status(400).send("Password must be at least 6 characters long!");
    }

    // Check for uniqueness
    const existingUser = user_information.find(element =>
      element.username === username ||
      element.email === email ||
      element.phone === phone
    );

    if (existingUser) {
      let errorMessage = "";
      if (existingUser?.username === username) {
        errorMessage += "Username already exists! ";
      }
      if (existingUser?.email === email) {
        errorMessage += "Email already exists! ";
      }
      if (existingUser?.phone === phone) {
        errorMessage += "Phone number already exists!";
      }
      return res.status(409).send(errorMessage.trim());
    }

    // If user does not exist, add a new user to the JSON file
    const newUser = {

      username: username,
      password: password,
      email: email,
      first: firstName,
      last: lastName,
      phone: phone
      // Add any other fields required
    };

    user_information.push(newUser);

    // Write the updated data back to the JSON file
    fs.writeFileSync(
      example_data_path,
      JSON.stringify({ user_details: user_information }, null, 2),
      'utf8'
    );

    // Send a response to indicate successful registration
    res.status(201).send("User created successfully!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = signUp;
