const input = document.querySelector('input');
const btn = document.querySelector('button');
const list = document.querySelector('.list');

btn.onclick = function () {
    const li = documentc.createElement('li');
    li.innerHTML = `<p>할 일: ${input.value}</p>
    <button onclick="this.parentElement.remove()">삭제</button>`;

    list.append(li);
    input.value = "";
};
