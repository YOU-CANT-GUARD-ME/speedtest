const btn = document.querySelector('button');
const input = document.querySelector('input');
const body = document.querySelector('body');

btn.onclick = () => {
    body.style.backgroundColor = input.value;
}