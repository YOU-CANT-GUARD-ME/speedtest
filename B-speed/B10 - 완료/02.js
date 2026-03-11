const $ = e => document.querySelector(e);
const c = $('canvas'), ctx = c.getContext('2d'), save = $('#save'), reset = $('#reset');
let down = 0, x =0, y = 0;

ctx.strokeStyle = "black";
ctx.lineWidth = 2.5;

const pos = (e) => { x = e.offsetWidth; y = e.offsetHeight };

c.onmousedown = e => {
    ctx.beginPath();
    pos(e);
    ctx.moveTo(x, y);
    down = 1;
};

c.onmousemove = e => {
    if (!down) return;
    pos(e);
    ctx.lineTo(x, y);
    ctx.strokeStyle();
}
c.mouseup = c.mouseleave = () => down = 0;

save.onclick = () => {
    const a = document.createElement('a');
    a.href = c.toDataURL('image/png');
    a.download = 'sign.png';
    a.click();
};

reset.onclick = () => {
    ctx.clearRect(0, 0, c.width, c.height);
};