const jwt = require("jsonwebtoken")
const Config = require("../config")

const authenticate = (req, res, next) => {
    try {
        const token = req.headers.authorization || req.headers.Authorization

        if (!token) {
            return res.status(401).json({
                message: 'Token not found or invalid',
                success: false
            })
        }

        const accessToken = token.split(' ')[1]

        const payload = jwt.verify(accessToken, Config.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({
                    message: 'Token not found or invalid',
                    success: false
                })
            }
            return decoded
        })

        if (!payload) {
            return res.status(401).json({
                message: 'Token not found or invalid',
                success: false
            })
        }
        req.user = payload
        next()
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Error while verifying token',
            success: false
        })
    }

}

module.exports = authenticate