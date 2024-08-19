document.addEventListener('DOMContentLoaded', () => {

    let incrementCount = document.querySelector('.incrementCount')
    let throttleCount = document.querySelector('.incrementThrottle')
    let button = document.querySelector('button')

    let triggeredCount = 0
    let count = 0

    function myThrottle(cb, d) {

        let last = 0

        return function (...args) {
            let now = new Date().getTime()
            if (now - last < d) return
            last = now
            return cb(...args)
        }
    }

    const throttle = myThrottle(() => {
        triggeredCount += 1
        throttleCount.innerHTML = triggeredCount
    }, 800)


    button.addEventListener('click', () => {
        count++
        incrementCount.textContent = count
        throttle()
    })
})