const form = document.querySelector(".formSection_form")
const retriever = document.querySelector(".tinyRetriever_button")

function main(){
    console.log("hello")
}

main()

form.addEventListener("submit", (event) => {
    event.preventDefault()
    event.stopPropagation()

    get_url();
})

async function get_url(){
    const url = "http://localhost:8080/new"

    try {
        let response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({long_url: "youtube.com"})
        })
        if(!response.ok){
            throw new Error("errorrrrrr")
        }

        let result = await response.json()
        console.log(result)
    }
    catch (error) {
        console.error(error)
    }

}
