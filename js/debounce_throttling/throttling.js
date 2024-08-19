function throttle(cb, d) {
    let last = 0;
    return function (...args) {
        let now = new Date().getTime()
        if (now - last < d) return
        last = now
        return cb(...args)
    }
}

//window resizing

// function handleResize() {
//     console.log('window resized')
// }

// window.addEventListener('resize', throttle(handleResize, 200))
