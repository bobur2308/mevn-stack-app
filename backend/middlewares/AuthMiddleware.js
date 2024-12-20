const jwt = require('jsonwebtoken')

async function authenticate(req, res, next) {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  // console.log('Received token:', token);  // Log the received token

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    // console.log('Verifying token with secret:', 'access-secret');  // Ensure this matches the secret used during signing
    const decoded = await jwt.verify(token, 'access_secret');
    // console.log('Decoded token:', decoded);  // Log decoded token for debugging

    req.user = decoded;
    // console.log('User ->', token);
    next();
  } catch (error) {
    console.error('JWT verification error:', error.message); // Log detailed error
    res.status(401).json({ message: 'Invalid or expired token.' });
  }
}


module.exports = authenticate;
