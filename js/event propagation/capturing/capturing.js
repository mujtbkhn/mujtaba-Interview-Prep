const btn = document.querySelector("button")
const form = document.querySelector("form")
const div = document.querySelector("div")

div.addEventListener("click", () => {
    alert("div clicked")
}, {
    capture: true
})
form.addEventListener("click", () => {
    alert("form clicked")
}, {
    capture: true
})
btn.addEventListener("click", () => {
    alert("button clicked")
}, {
    capture: true
})

//with the help of capture: true we make the events triggered from top to bottom and if any of the event doesnt have capture: true then that event will behave like a event bubble and rest will be event captured so for ex form doesnt have capture : true and now i click on btn (where btn and div has capture: true) the events will trigger the following way: 
// div(capture) --> btn(capture) --> form(bubble) 

