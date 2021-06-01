const User = require('../models/User')
const ErrorResponse = require('../utlis/errorResponse')

exports.register = async (req, res, next) => {
    const { username, email, password } = req.body;
    try {
        const user = await User.create({ username, email, password })
        res.status(201).json({
            success: true,
            token: 'rt48b1f54d'
        })
    } catch (error) {
        next(error)
    }
}

exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) { return next(new ErrorResponse('Please provide email and password'), 400) }
    try {
        const user = await User.findOne({ email }).select('+password')
        if (!user) { return next(new ErrorResponse('Invalid Creadentials'), 401) }
        const isMatch = await user.matchPasswords(password)
        if (!isMatch) { return next(new ErrorResponse('Invalid Creadentials'), 401) }
        res.status(200).json({ success: true, token: 'ad5as2df1' })
    } catch (error) {
        res.status(500).json({ success: false, error: error.message })
    }
}

exports.forgotpassword = (req, res, next) => {
    res.send('Forgot Password route')
}

exports.resetpassword = (req, res, next) => {
    res.send('Reset Password route')
}

const sendToken = (user, statusCode, res) => {
    const token = user.getSignedToken()
    res.status(statusCode).json({ success: true, token })
}