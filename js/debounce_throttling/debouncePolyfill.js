document.addEventListener('DOMContentLoaded', () => {

    let incrementCount = document.querySelector('.incrementCount')
    let debounceCount = document.querySelector('.incrementDebounce')
    let button = document.querySelector('button')

    let triggeredCount = 0;
    let count = 0;

    function myDebounce(cb, d) {
        let timer;
        return function (...args) {
            if (timer) clearTimeout(timer)
            timer = setTimeout(() => {
                cb(...args)
            }, d);
        }
    }

    const debounce = myDebounce(() => {
        triggeredCount += 1
        debounceCount.innerHTML = triggeredCount
    }, 800)


    button.addEventListener('click', () => {
        count++
        incrementCount.textContent = count
        debounce()
    })
})

/*
function debounce(callback, delay) {
    let timerId;
    return function (...args) {
        if (timerId) clearTimeout(timerId)
        timerId = setTimeout(() => {
            callback(...args)
        }, delay);
    }
}
function printData(data) {
    console.log(data)
}

let optimizedPr = debounce(printData, 1000)
optimizedPr('I')
optimizedPr('Ip')
optimizedPr('Iph')
optimizedPr('Ipho')
optimizedPr('Iphon')
optimizedPr('Iphone')
*/


// function newDebounce(cb, d){
//     let timer;
//     return function (...args){
//         if (timer) clearTimeout(timer)
//             timer = setTimeout(() => {
//                 cb(...args)
//             }, d);
//     }
// }

// function print(data){
//     console.log(data)
// }

// let optim = newDebounce(print, 1000)
// optim('I')
// optim('Ip')
// optim('Iph')
// optim('Iphoneeee')