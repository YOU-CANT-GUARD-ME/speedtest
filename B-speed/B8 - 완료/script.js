const logs = document.querySelector('.logs');

function createNotice(value) {
    const newdiv = document.createElement('div');
    newdiv.textContent = value === 'grn' ? '성공하였습니다' : '실패하였습니다';
    newdiv.classList.add(value);
    logs.append(newdiv);
    newdiv.onclick = () => newdiv.remove();
    setTimeout(() => newdiv.remove(), 5000)
}