
const form = document.querySelector(".formSection_form")


function formPressed(){
    event.stopPropagation()
    console.log("hello again mf")
}

function main(){
    console.log("hello")
}
main()
form.addEventListener("submit", formPressed)
