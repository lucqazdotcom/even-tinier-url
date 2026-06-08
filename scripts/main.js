const form = document.querySelector(".formSection_form")
const url_input = document.querySelector(".formSection_input")

const generated_link_section = document.querySelector(".linkSection")
const generated_tiny_url = document.querySelector(".linkSection_generatedLink")

const retrieve_section = document.querySelector(".retrieveSection")
const retrieve_section_input = document.querySelector(".retrieveSection_input")

const retrieved_section = document.querySelector(".retrievedSection")
const retrieved_link_text = document.querySelector("#retrievedLinkText")
const retrieved_link = document.querySelector("#retrievedLink")
const retriever = document.querySelector(".tinyRetriever_button")


function main() {
    console.log("hello")
}

main()

form.addEventListener("submit", (event) => {
    event.preventDefault()
    event.stopPropagation()

    let long_url = url_input.value
    get_url(long_url);
})

retriever.addEventListener("click", (event) => {
    event.preventDefault()
    event.stopPropagation()

    let short_code = retrieve_section_input.value
    console.log(short_code)
    retrieve_url(short_code)
})

async function get_url(long_url) {
    const url = "http://localhost:8080/new"

    try {
        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ long_url: long_url })
        })
        if (!response.ok) {
            throw new Error("Error creating an even tinier url from long url.")
        }

        let result = await response.json()
        generated_tiny_url.innerHTML = result.short_url
        generated_link_section.classList.add("visible")
    }
    catch (error) {
        console.error(error)
    }
}

async function retrieve_url(short_code) {
    const url = `http://localhost:8080/retrieve/${short_code}`

    try {
        let response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })

        if (!response.ok) {
            throw new Error("Error retrieving long url from short code.")
        }

        let result = await response.json()
        retrieved_link_text.innerHTML = result.long_url
        retrieved_link.href = result.long_url
        retrieved_section.classList.add("visible")

    }
    catch (error) {
        console.error(error)
    }

}
