const input = document.querySelector('input');
const btn = document.querySelector('button');
const list = document.querySelector('.list');

btn.onclick = () => {
    const li = document.createElement('li');
    li.innerHTML = `<p>할 일: ${input.value}</p>
    <button class="des" onclick="this.parentElement.remove()">삭제</button>`;

    list.append(li);
    input.value = '';
}