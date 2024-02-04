document.addEventListener('DOMContentLoaded', function() {
    const welcome = document.getElementById('welcome')
    const user = window.parent.tb.user.username
    if (localStorage.getItem('welcome') === 'true') {
        welcome.innerText = `Welcome back ${user}`
    } else {
        welcome.innerText = 'Welcome to Terbium Games!'
        localStorage.setItem('welcome', true)
    }
    alert('skibi')
});