const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const useMagicLink = document.getElementById('magic-link').checked

    if (useMagicLink) {
        window.location.href = 'magic-link.html'
    } else {
        window.location.href = 'sign-in.html'
    }
})
