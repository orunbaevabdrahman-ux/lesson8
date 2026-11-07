
const button = document.getElementById('black');

function applyTheme(theme) {
    if(theme === 'dark') {
        document.body.classList.add('dark');
        button.textContent = "svet"
    } else {
        document.body.classList.remove('dark');
            button.textContent = "temno";
    }
}

const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

button.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
});