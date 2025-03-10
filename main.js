const url = "https://api.mymemory.translated.net/get"

const language = {
        "en": "English",
        "es": "Spanish",
        "fr": "French",
        "de": "German",
        "it": "Italian",
        "ja": "Japanese",
        "ko": "Korean",
        "pt": "Portuguese",
        "ru": "Russian",
        "zh": "Chinese"
} 

document.addEventListener('DOMContentLoaded', () => {
        const inputLang = document.getElementById("inputLang")
        const outputLang = document.getElementById("outputLang")
        Object.entries(language).forEach(([code, name]) => {
                inputLang.innerHTML += `<option value="${code}">${name}</option>`
                outputLang.innerHTML += `<option value="${code}">${name}</option>`
        });
});

document.getElementById("translateBtn").addEventListener("click", async () => {
        const text = document.getElementById("inputText").value
        const fromLang = document.getElementById("inputLang").value
        const toLang = document.getElementById("outputLang").value
        if (!text) return;

        const response = await fetch(`${url}?q=${text}&langpair=${fromLang}|${toLang}`)
        const data = await response.json()
        document.getElementById("outputText").value = data.responseData.translatedText
})