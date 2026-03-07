const input = document.querySelector('input');
const btn = document.querySelector('button');
const list = document.querySelector('.list');

btn.onclick = () => {
    const li = Object.assign(document.createElement('li'), {
        innerHTML: `<p>할 일: ${input.value}</p>
        <button class="des" onclick="parentElement.remove()">삭제</button>`
    });
    list.appendChild(li);
    input.value = "";
}