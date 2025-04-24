const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const useMagicLink = document.getElementById('magic-link').checked
    const email = document.querySelector('input[type="email"]').value
    const encodedEmail = encodeURIComponent(email)

    if (useMagicLink) {
        window.location.href = `magic-link.html?email=${encodedEmail}`
    } else {
        window.location.href = `sign-in.html?email=${encodedEmail}`
    }
})
