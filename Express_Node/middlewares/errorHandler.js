// const errorMiddleware = (err, req, res, next) => {
//     const status = err.status || 500;
//     const message = err.message || "Backend error";
//     const extraDetails = err.extraDetails || "some error in backend"

//     return res.status(status).json({
//         message: message,
//         extraDetails: extraDetails
//     })
// }

// module.exports = errorMiddleware
const errorHandler = (err, req, res, next) => {
    console.error("error occurred",err.stack)

    if (err.name === 'ValidationError') {
        return res.status(400).json({ message: "Validation Error", errors: err.errors })
    }

    if (err.code === 11000) {
        return res.status(400).json({ message: 'Duplicate key error', details: err.keyValue });
    }
    res.status(err.status || 500).json({
        message: err.message || "Internal Server Error",
        ...(process.env.NODE_ENV === 'development' ? { stack: err.stack } : {})
    })
}

module.exports = { errorHandler }