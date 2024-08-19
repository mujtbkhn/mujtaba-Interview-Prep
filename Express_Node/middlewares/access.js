const axios = require('axios')
const access = async (req, res, next) => {
    try {
        const day = new Date().getDay()
        const restrictedDays = [1, 3]
        if (restrictedDays.includes(day)) {
            return res.status(403).json({
                message: "Not accessible on this day!"
            })
        } else {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            const data = response.data.filter(item => item.website.endsWith('.org'))
            // console.log(data)
            req.user = data
            console.log(req.user)
            next()

            // return res.status(200).json({    
            //     message: "Accessible!"
            // })
        }
    } catch (error) {
        console.error(error)
    }
}

module.exports = access