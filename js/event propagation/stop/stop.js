const btn = document.querySelector("button")
const form = document.querySelector("form")
const div = document.querySelector("div")

div.addEventListener("click", (e) => {
    // e.stopPropagation()
    alert("div clicked")
})
form.addEventListener("click", (e) => {
    e.stopPropagation()
    alert("form clicked")
})
btn.addEventListener("click", (e) => {
    // e.stopPropagation()
    alert("button clicked")
})

//for stopping the event bubbling/capturing we need to add e.stopPropagation() which will only make the target event trigger 
//what if you want to have the events triggered till a event then you can add e.stopPropagation() to the event which you want the last propagation to be 
//for ex: you want the events to be triggered from btn till form and to stop from form then add e.stopPropagation on form 