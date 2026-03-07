const $ = e => document.querySelector(e);

const input = $('input');

const getStregth = pw => {
    const l = pw.length,
    u = /[A-Z]/.test(pw),
    n = /[0-9]/.test(pw),
    s = /[!@#$%^&*]/.test(pw);

    input.style.borderColor = 
    !l ? "black":
    l >= 8 && u && n && s ? "green" :
    l >=6 && (u || n) ? "yellow" :
    "red";
};
input.addEventListener('input', ({e}) => {
    getStregth(e.value);
})