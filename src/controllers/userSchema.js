const bcryptjs = require('bcryptjs');
const userModel = require("../models/userModel")

const userController = {
    create: async (req, res) => {
        const { name, email, password } = req.body

        try {
            const user = await userModel.findOne({ email })

            if (user) {
                res.status(400).json({
                    message: 'email is already exists',
                    success: false
                })
            }

            const data = await userModel.create({ name, email })


        } catch (error) {

        }

    }
}