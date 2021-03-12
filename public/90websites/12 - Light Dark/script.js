const change = document.querySelector('#change')

change.addEventListener('change', () => {
    document.body.classList.toggle("dark", this.checked)
})