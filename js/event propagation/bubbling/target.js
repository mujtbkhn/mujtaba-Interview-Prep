const btn = document.querySelector("button")
const form = document.querySelector("form")
const div = document.querySelector("div")

div.addEventListener("click", func)
form.addEventListener("click", func)
btn.addEventListener("click", func)

function func(event) {
    alert(
        "currentTarget: " + event.currentTarget.tagName +
        ", target: " + event.target.tagName +
        ", thisTarget: " + this.tagName
    )
}

//only target shows the first event clicked and current Target and this target will point to the current event