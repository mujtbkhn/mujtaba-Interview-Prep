const accessControl = (role) => {
    return (req, res, next) => {
        if (!req.user || !req.user.roles === role) {
            return res.status(403).json({ message: "Access restricted" })
        }
        next()
    }
}