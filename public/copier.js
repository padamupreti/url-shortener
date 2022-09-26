const copyButton = document.getElementById('copy-button')
if (copyButton) {
    copyButton.addEventListener('click', () => {
        const popup = document.getElementById('success-popup')
        popup.classList.add('pop')
        const shortLink = document.getElementById('short-link').textContent
        navigator.clipboard.writeText(shortLink)
        setTimeout(() => popup.classList.remove('pop'), 4000)
    })
}
