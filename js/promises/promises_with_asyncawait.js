//nested promises

async function userInfo() {
    try {
        const promise1 = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("user account created")
            }, 100);
        })
        if (promise1) {
            const promise2 = await new Promise((resolve, reject) => {
                resolve("subscription added")
            })
            if (promise2) {
                const promise3 = await new Promise((resolve, reject) => {
                    resolve("subscription history created")
                })
            }
        }
    } catch (error) {
        console.error(error)
    }
}
async function promiseAllDemo() {
    try {
        const promise1 = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('success')
            }, 100);
        })
        const promise2 = await Promise.resolve("resolved")
        const promise3 = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("resolved3")
            }, 200)
        })

        const resolvedPromises = await Promise.all([promise1, promise2, promise3])
        console.log(resolvedPromises)
    } catch (error) {
        console.error(error)
    }
}
promiseAllDemo()