const bcryptjs = require('bcryptjs');
const userModel = require("../models/userModel")

const userController = {
    create: async (req, res) => {

        try {
            const { name, email, password } = req.body
            const user = await userModel.findOne({ email })

            if (user) {
                return res.status(400).json({
                    message: 'email is already exists',
                    success: false
                })
            }
            const _SALT_ROUND = 10
            const hashedPassword = await bcryptjs.hash(password, _SALT_ROUND)
            console.log(hashedPassword)
            const data = await userModel.create({ name, email, password: hashedPassword })
            res.status(201).json({
                message: 'Signup Succesfully',
                success: true,
                data
            })
        } catch (error) {
            res.status(500).json({
                message: 'Error while creating user in db',
                success: false
            })
        }

    }
}

module.exports = userController