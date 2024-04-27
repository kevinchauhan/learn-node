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

        const payload = jwt.verify(token, Config.JWT_SECRET)

        if (!payload) {
            return res.status(401).json({
                message: 'Token not found or invalid',
                success: false
            })
        }

        next()
    } catch (error) {
        res.status(500).json({
            message: 'Error while verifying token',
            success: false
        })
    }

}

module.exports = authenticate