const getData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Math.floor(Math.random() * 100))
        }, 100);
    })
}


const getResult = async () => {
    let results = []
    for (let i = 0; i < 10; i++) {
        let result = await getData()
        results.push(result)
    }
    // let promises = await Promise.all(results)
    // console.log(promises)
    console.log(results)
}
getResult()