const express = require('express');
const jwt = require('jsonwebtoken');
const { newUser } = require('../models/user');
const secret_key = "mujju"

const registerUser = async (req, res, next) => {
    try {
        const { username, password, isAdmin } = req.body;
        if (!username || !password) {
            return res.status(404).json({
                message: "username or password is missing"
            });
        }

        // throw new Error("simulated server error");

        const isUserExists = await newUser.findOne({ username });
        if (isUserExists) {
            return res.status(400).json({
                message: "username already exists"
            });
        }

        const user = new newUser({
            username,
            password,
            isAdmin: isAdmin || false
        });

        await user.save();

        const token = jwt.sign({ Id: user._id, username: user.username, isAdmin: user.isAdmin }, secret_key, { expiresIn: '1h' });

        res.json({
            message: "user registered successfully",
            token
        });
    } catch (error) {
        // console.error("Error in registerUser:", error); // Added logging for debugging
        // res.status(500).json({ message: "Internal server error" });
        next(error)
    }
};

const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(404).json({
                msg: "username or password is missing"
            });
        }

        const userDetails = await newUser.findOne({ username });
        if (!userDetails) {
            return res.status(400).json({
                msg: "incorrect username"
            });
        }

        const passwordMatch = userDetails.password === password;
        if (!passwordMatch) {
            return res.status(401).json({
                msg: "invalid password"
            });
        }

        const token = jwt.sign({ Id: userDetails._id, username: userDetails.username, isAdmin: userDetails.isAdmin }, secret_key, { expiresIn: '1h' });

        res.json({
            message: "user logged in successfully",
            token
        });
    } catch (error) {
        // console.error("Error in loginUser:", error); // Added logging for debugging
        // res.status(500).json({ message: "Internal server error" });
        next(error)
    }
};

const verifyUser = async (req, res) => {
    try {

        res.json({
            message: "Verified"
        })
    } catch (error) {
        console.error(error)
    }
}

module.exports = { registerUser, loginUser, verifyUser };
