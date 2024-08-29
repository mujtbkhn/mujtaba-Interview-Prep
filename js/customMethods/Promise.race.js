function PromiseRace(promises) {

    return new Promise((resolve, reject) => {


        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(resolve)
                .catch(reject)
        })
    })
}

const promise1 = new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100));
const promise2 = 42;
const promise3 = new Promise((resolve) => setTimeout(() => resolve('foo'), 50));

PromiseRace([promise1, promise2, promise3])
    .then((value) => {
        console.log("Resolved:", value);
    })
    .catch((error) => {
        console.error("Rejected:", error);
    });