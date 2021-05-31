const User = require('../models/User')

exports.register = async (req, res, next) => {
    const { username, email, password } = req.body;
    try {
        const user = await User.create({ username, email, password })
        res.status(201).json({
            success: true,
            user,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        })
    }
}

exports.login = (req, res, next) => {
    res.send('Login route')
}

exports.forgotpassword = (req, res, next) => {
    res.send('Forgot Password route')
}

exports.resetpassword = (req, res, next) => {
    res.send('Reset Password route')
}