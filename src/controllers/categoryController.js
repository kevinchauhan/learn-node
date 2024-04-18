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
    }
}

module.exports = categoryController