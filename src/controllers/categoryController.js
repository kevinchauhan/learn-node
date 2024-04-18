const categoryModel = require("../models/categoryModel")

const categoryController = {
    get: async (req, res) => {
        try {
            const categories = await categoryModel.find()
            res.send(categories)
        } catch (error) {
            console.log(error)
            res.status(500).send('error while fetching data')
        }
    },

    create: async (req, res) => {
        try {
            const category = await categoryModel.findOne({ name: req.body.name })
            if (category) {
                res.status(400).send('Category name already exists')
                return
            }
            const categories = await categoryModel.create(req.body)
            res.send(categories)
        } catch (error) {
            console.log(error)
            res.status(500).send('error while inserting data')
        }
    }
}

module.exports = categoryController