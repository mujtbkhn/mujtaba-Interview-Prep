const { newUser } = require("../models/user")


const getProfile = async (req, res, next) => {
    try {
        res.json({
            message: "Profile Page"
        })
    } catch (error) {
        return res.status(400).json({
            message: "some error occurred"
        })
    }
}

const getAdmin = async (req, res, next) => {
    try {
        const { username } = req.user;
        console.log("req.user:", req.user); // Added logging for debugging

        const admin = await newUser.findOne({ username, isAdmin: true });
        if (!admin) {
            return res.status(401).json({
                message: "not authorized"
            });
        }
        res.json({
            message: "Admin page"
        });
    } catch (error) {
        console.error("Error in getAdmin:", error); // Added logging for debugging
        return res.status(400).json({
            message: "some error occurred"
        });
    }
};


module.exports = { getProfile, getAdmin }