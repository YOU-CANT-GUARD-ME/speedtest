const logs = document.querySelector('.logs');

function createNotice (value) {
    const newDiv = document.createElement('div');

    newDiv.textContent = value === 'grn' ? '성공하였습니다' : '실패하였습니다';
    newDiv.classList.add(value);

    logs.append(newDiv);

    newDiv.addEventListener('click', () => newDiv.remove());

    setTimeout(() => newDiv.remove(), 3000);
}