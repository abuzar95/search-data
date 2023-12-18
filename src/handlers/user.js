const { User } = require('../model');

class user {
    getAllUsers = async (req, res) => {
        try {
            const users = await User.find({});
            res.send({ data: users, status: 200, message: "Successful" });
        } catch (error) {
            console.log("Error: " + error)
            res
                .status(500)
                .send({ status: 500, data: null, message: "Server error." });
        }
    }
};

module.exports = user;
