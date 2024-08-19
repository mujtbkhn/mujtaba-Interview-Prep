const btn = document.querySelector("button")
const form = document.querySelector("form")
const div = document.querySelector("div")

div.addEventListener("click", () => {
    alert("div clicked")
})
form.addEventListener("click", () => {
    alert("form clicked")
})
btn.addEventListener("click", (e) => {
    e.stopPropagation()
    alert("button clicked")
})

//bubbling is bottom up events as the name suggests like a bubble which floats from bottom to top

