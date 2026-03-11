const input = document.querySelector('input');
const btn = document.querySelector('button');
const list = document.querySelector('.list');

btn.onclick = function () {
    const li = document.createElement('li');
    li.innerHTML = `<p>할 일: ${input.value}</p>
    <button onclick="this.parentElement.remove()">삭제</button>`;

    li.append(li);
    input.value = "";
}