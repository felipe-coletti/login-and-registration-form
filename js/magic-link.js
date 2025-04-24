const button = document.getElementById('primary-button')
let countdown = 20

const interval = setInterval(() => {
    countdown--
    button.textContent = `Reenviar (${countdown}s)`

    if (countdown <= 0) {
        clearInterval(interval)
        button.textContent = 'Reenviar'
        button.disabled = false
    }
}, 1000)
