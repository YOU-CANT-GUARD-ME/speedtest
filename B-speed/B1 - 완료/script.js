const input = document.querySelector('input');

const getStregth = pw => {
    const l = pw.length,
    u = /[A-Z]/.test(pw),
    n = /[0-9]/.test(pw),
    s = /[!@#$%^&*]/.test(pw);

    input.style.borderColor = 
    !l ? "black" :
    l >= 8 && u && n && s ? "green" :
    l >= 6 && (u || n) ? "yellow" :
    "red";
};

input.addEventListener('input', ({target}) => {
    getStregth(target.value);
});