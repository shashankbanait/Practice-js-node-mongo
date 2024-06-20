const User = require('../models/User');

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }
    res.send("this is trial response");
 
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};




//___________________________
// exports.login = async (req, res) => {
//   const { email, password } = req.body;  // Extract email and password from the request body
//   try {
//     // Find the user by email
//     let user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ msg: 'Invalid Credentials' });
//     }

//     // Compare the provided password with the stored hashed password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ msg: 'Invalid Credentials' });
//     }

//     // Create JWT payload
//     const payload = {
//       user: {
//         id: user.id,
//       },
//     };

//     // Sign the token and send it back to the client
//     jwt.sign(
//       payload,
//       process.env.JWT_SECRET,
//       { expiresIn: '1h' },
//       (err, token) => {
//         if (err) throw err;
//         res.json({ token });
//       }
//     );
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// };
