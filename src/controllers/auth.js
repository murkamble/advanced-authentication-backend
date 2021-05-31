exports.register = (req, res, next) => {
    res.send('Register route')
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