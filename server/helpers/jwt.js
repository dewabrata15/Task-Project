if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET

const signToken = (user) => {
    const { id } = user
    return jwt.sign({ id }, JWT_SECRET)
}

const verifyToken = (token) => {
    return jwt.verify(token, JWT_SECRET)
}

module.exports = {
    signToken,
    verifyToken
}