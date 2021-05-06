const accessBtn = document.getElementById('access')
const clearBtn = document.getElementById('clear')
const infoParagraph = document.getElementById('info')
const accessLocalStorage = () => {
    let storageInfo = JSON.stringify(window.localStorage).replaceAll('"', '').replaceAll('\\', '').replaceAll('{', '').replaceAll('}', '').replaceAll(',', '\n\n')
    infoParagraph.innerText = storageInfo
}
accessBtn.addEventListener('click', accessLocalStorage)
clearBtn.addEventListener('click', () => {
    window.localStorage.clear()
})