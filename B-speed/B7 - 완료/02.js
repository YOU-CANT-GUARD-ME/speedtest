const inputs = document.querySelectorAll('input');

inputs.forEach((input, i) => {
    input.addEventListener('input', (e) => {
        if (!/^\d$/.test(e.target.value)) e.target.value = '';
        if (e.target.value && i < 5) inputs[i + 1].focus();
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && !input.value && i > 0) inputs[i - 1].focus();
    });
});