const fs = require('fs');
const path = require('path');
const example_data_path = path.join(__dirname, '../user_details.json');

const login = (req, res) => {
  try {
    // Read user data
    const example_data = require(example_data_path);
    const user_information = example_data.user_details;

    const { username, password } = req.body;

    // Check for missing username or password
    if (!username || !password) {
      return res.status(400).send("Username or password cannot be null!");
    }

    // Check if user exists with provided username and password
    const user = user_information.find(element =>
      element.username === username && element.password === password
    );

    if (user) {
      // Remove sensitive data before sending response
      const { username, password, ...userDetails } = user;
      return res.status(200).send(userDetails);
    } else {
      return res.status(401).send("Username or password is incorrect.");
    }

  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = login;
