const btn = document.querySelector('button');
const color = document.querySelector('input');
const body = document.querySelector('body');

btn.addEventListener('click', () => {
    body.style.backgroundColor = color.value;
});