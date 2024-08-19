const jwt = require('jsonwebtoken')
const secret_key = "mujju"

const decodeJwt = async (req, res, next) => {
    try {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader) {
            return res.status(404).json({
                msg: "Token not found"
            });
        }

        const token = authorizationHeader.split(' ')[1]; // Extracting Bearer token
        if (!token) {
            return res.status(404).json({
                msg: "Token not found"
            });
        }

        const decoded = jwt.verify(token, secret_key);
        console.log("Decoded JWT:", decoded); // Added logging for debugging
        req.user = decoded;
        next();
    } catch (error) {
        console.error("Error in decodeJwt:", error); // Added logging for debugging
        return res.status(401).json({
            error: 'Access denied, token invalid'
        });
    }
};

const checkToken = async (req, res, next) => {
    const token = req.headers.authorization
    if (!token) {
        return res.status(401).json({
            message: "unauthorized"
        })
    }
    req.token = token
    next()
    res.status(200).json({
        message: "Token Found"
    })
}

const verifyToken = async (req, res, next) => {
    const token = req.token
    try {
        if (!token) {
            return res.status(404).json({
                message:
                    "Token not found"
            })
        }
        const decoded = jwt.verify(token, secret_key)
        req.user = decoded
        next()
    } catch (error) {
        return res.status(401).json({
            error: 'Access denied, token invalid'
        });
    }
}


module.exports = { decodeJwt, checkToken, verifyToken }