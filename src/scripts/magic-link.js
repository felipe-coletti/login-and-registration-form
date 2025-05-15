const setupResendDelay = (formSelector, buttonSelector, delaySeconds = 20) => {
    const form = document.querySelector(formSelector)
    const button = form?.querySelector(buttonSelector)

    if (!form || !button) return

    const originalText = button.textContent.trim()

    const startButtonDelay = () => {
        let counter = delaySeconds

        button.disabled = true
        button.textContent = `${originalText} (${counter}s)`

        const interval = setInterval(() => {
            counter--

            if (counter > 0) {
                button.textContent = `${originalText} (${counter}s)`
            } else {
                clearInterval(interval)
                button.textContent = originalText
                button.disabled = false
            }
        }, 1000)
    }

    startButtonDelay()

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        startButtonDelay()
    })
}

document.addEventListener('DOMContentLoaded', () => {
    setupResendDelay('#form', '#primary-button', 15)
})
