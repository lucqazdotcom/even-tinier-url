const form = document.querySelector(".formSection_form")
const retriever = document.querySelector(".tinyRetriever_button")
const local = window.localStorage

local.setItem("test-tiny", "")

function main(){
    console.log("hello")
}
main()

form.addEventListener("submit", (event) => {
    event.preventDefault()
    event.stopPropagation()

    const inputVal = document.getElementById("formInput").value
    const output = document.querySelector(".linkSection_container-generatedLink")
    let blender = 0

    hashThis(inputVal)
        .then((hex) => {
            blender = hex
            console.log(blender)
            local.setItem("test-tiny", blender)
            output.textContent = `Out: ${blender}`
            }
        )
        .catch((err) => console.log(err))

})

retriever.addEventListener("click", () => {
    let log = local.getItem("test-tiny")
    // console.log(log)
    request()
    // unHashThis(log)
})

async function request(){
    const url = "http://localhost:8080/hey"

    try {
        let response = await fetch(url)
        if(!response.ok){
            throw new Error("errorrrrrr")
        }

        let result = await response.json()
        console.log(result[0])
    }
    catch (error) {
        console.error(error)
    }

}

async function hashThis(link){
    const endodedMsg = new TextEncoder().encode(link)

    const hashHex = new Uint8Array(endodedMsg).toBase64()
    return hashHex
}

async function unHashThis(hash){
    const hashHex = Uint8Array.fromBase64(hash)
    const decodeMsg = new TextDecoder().decode(hashHex)
    console.log(decodeMsg)
}
