function PromiseAllSettled(promises) {

    return new Promise((resolve) => {

        let result = [];
        let totalPromises = promises.length;
        let completed = 0

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then((value) => {
                    result[index] = value;
                    completed++

                    if (completed === totalPromises) {
                        resolve(result)
                    }
                })
                .catch((reason) => {
                    result[index] = reason
                    completed++

                    if (completed === totalPromises) {
                        resolve(result)
                    }
                })
        })
    })
}

const promise1 = Promise.reject(3);
const promise2 = 42;
const promise3 = new Promise((resolve) => setTimeout(resolve, 100, 'foo'))

PromiseAllSettled([promise1, promise2, promise3])
    .then((values) => {
        console.log(values); // Expected output: [3, 42, 'foo']
    })
    .catch((error) => {
        console.error(error);
    });