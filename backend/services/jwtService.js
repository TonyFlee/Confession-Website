const jwt = require('jsonwebtoken');

class JwtService {
    // Generate a JWT token
    static generateToken(payload, expiresIn = '1h') {
        return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
    }

    // Verify a JWT token
    static verifyToken(token) {
        try {
            return jwt.verify(token, process.env.JWT_SECRET);
        } catch (err) {
            throw new Error('Invalid or expired token');
        }
    }
}

module.exports = JwtService;
