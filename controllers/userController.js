const User = require("../Model/User")

const user_all = async (req,res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        res.json({ message: error});
    }
}
const user_details = async (req,res) => {
    try {
        const users = await User.findById(req.params.productId)
        res.json(users)
    } catch (error) {
        res.json({ message: error});
    }
}
const user_create = async (req,res) => {
    const user = new User( {
        name: req.body.name,
        password: req.body.password
    })
    try {

        const saveUser = await user.save();
        res.send(saveUser);
    } catch (error) {
        res.status(400).send(error);
    }
}

const user_update = async (req,res) => {
    try {
        const product ={
            name: req.body.name,
            password: req.body.password
        }

        const updateProduct = await User.findByIdAndUpdate(
            {_id: req.params.productId },
            product
        );
        res.json(updateProduct);
    } catch (error) {
        res.json({ message: error});
    }
}
const user_delete = async (req,res) => {
    try {
        const deleteProduct = await User.findByIdAndDelete(req.params.productId);
        res.json(deleteProduct);
    } catch (error) {
        res.json({ message: error});
    }
}

module.exports = {
    user_all,
    user_details,
    user_create,
    user_update,
    user_delete
}