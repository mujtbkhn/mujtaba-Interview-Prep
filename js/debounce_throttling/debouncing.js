function debounce(cb, d) {
    let timer;
    return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            cb(...args)
        }, d);
    }
}

//for searching

function printData(data) {
    console.log(data)
}

let optimizedQuery = debounce(printData, 1000)

optimizedQuery("I")
optimizedQuery("Ip")
optimizedQuery("Iph")
optimizedQuery("Ipho")
optimizedQuery("Iphon")
optimizedQuery("Iphone")

//for validating Input

function validateInput(value){
    console.log(`validating input : ${value}`)
}

const debouncedInput = debounce(validateInput, 1200)
debouncedInput('mujtaba')
debouncedInput('mujtaba khan')
debouncedInput('mujtaba khan mujjukhn538@gmail.com')