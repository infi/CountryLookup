/*
Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you
*/

const sel = (q) => document.querySelector(q)

const searchbar = sel("#searchbox")
const searchbtn = sel("#searchbtn")

searchbar.value = ""

// This contains results
const resultContainer = {
    self: sel("#result-container"),
    children: {
        name: sel("#result-name"),
        flag: sel("#result-flag"),
        tlds: sel("#result-tlds"),
        codes: sel("#result-codes"),
        callc: sel("#result-callc"),
        capi: sel("#result-capi"),
        aka: sel("#result-aka"),
        regio: sel("#result-regio"),
        pop: sel("#result-pop"),
        demonym: sel("#result-demonym"),
        time: sel("#result-time"),
        border: sel("#result-border"),
        native: sel("#result-native"),
        numeric: sel("#result-numeric"),
        lang: sel("#result-lang")
    }
}

// The error container
const errorContainer = {
    self: sel("#error-container"),
    title: sel("#error-title"),
    desc: sel("#error-desc")
}

resultContainer.self.style.display = "none"
errorContainer.self.style.display = "none"

/**
 * initializes a search
 * @param {String} query
 * @returns {void} 
 */
const initializeSearch = async (query) => {
    if (!query) return error("Searches cannot be empty", "Fun fact: This tool supports about 240 countries.")
    resultContainer.self.style.display = "none"
    errorContainer.self.style.display = "none"
    const res = await fetch("https://restcountries.eu/rest/v2/name/" + String(query))
    const body = await res.json().catch(() => {
        error("Failed to parse response", "Please make sure your query is valid.")
    })

    // WARNING: The following code is not great...

    const country = body[0]
    if (!country) {
        error("Not found", "No results were found to your query.")
    } else {
        resultContainer.self.style.display = "inherit"

        // header
        resultContainer.children.name.innerText = country.name
        resultContainer.children.flag.setAttribute("src", country.flag)

        // column 1
        resultContainer.children.tlds.innerText = country.topLevelDomain.join(", ") || ""
        resultContainer.children.codes.innerText = `2-Char: ${country.alpha2Code} / 3-Char: ${country.alpha3Code}`
        resultContainer.children.callc.innerText = country.callingCodes.map(x => "+" + x).join(", ") || ""
        resultContainer.children.capi.innerText = country.capital

        // column 2
        resultContainer.children.aka.innerText = country.altSpellings.join(", ") || ""
        resultContainer.children.regio.innerText = country.region
        resultContainer.children.pop.innerText = country.population
        resultContainer.children.demonym.innerText = country.demonym

        // column 3
        // just 2 sections, as those can get long already
        resultContainer.children.time.innerText = "UTC: " + country.timezones
            .map(x =>
                x // remove unneeded info
                    .replace("UTC", "")
                    .replace(":00", "")
            ).join(", ")
            || ""
        resultContainer.children.border.innerText = country.borders.join(", ") || "<nobody>"

        // column 4
        resultContainer.children.native.innerText = country.nativeName
        resultContainer.children.numeric.innerText = country.numericCode
        let languages = []
        country.languages.forEach(language => {
            languages.push(language.name)
        })
        resultContainer.children.lang.innerText = languages.join(", ") || ""
    }
}

// Press enter to search
searchbar.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        initializeSearch(searchbar.value)
    }
})

// Click on the search button to search
searchbtn.addEventListener("click", () => [
    initializeSearch(searchbar.value)
])

/**
 * Display an error in a human-intended format
 * @param {String} title Error title 
 * @param {String} desc Error description
 */
const error = (title, desc) => {
    errorContainer.self.style.display = "inherit"
    errorContainer.desc.innerText = desc
    errorContainer.title.innerText = title
}