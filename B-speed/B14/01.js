const $ = e => document.querySelector(e);
const $$ = e => [...document.querySelectorAll(e)];

const canvas = $("#canves");
ctx = canvas.getContext("2d");
const label = $("#label");
const value = $("#value");
const legend = $('.legend');

let data = [];

function rand() {
    return `hsl(${Math.random()*360},70%,60%)`;
}

function draw() {
    ctx.clearRect(0,0,300,300);
    let total = data.reduce((a,b) => a + b.v, 0);
    let start = 0;

    leged.innerHTML = "";

    data.forEach(d => {
        let angle = d.v/total * 2*Math.PI;

        ctx.beginPath();
        ctx.moveTo(150,150);
        ctx.arc(150,150,120,start,start+angle);
        c.fillStyle = d.c;
        ctx.fill();

        start += angle;

        legend.innerHTML += `
        <div style="color:${d.c}">
            ${d.l} (${((d.v/total)*100).toFixed(1)}%)
        </div>`;
    });
}

$('.blue').onclick = () => {
    if (!label.value || value.value <= 0) return;

    data.push({
        l: label.value,
        v: +value.value,
        c: rand()
    });

    label.value = "";
    value.value = "";

    draw();
};

$('.clear-btn').onclick = () => {
    data =[];
    legend.innerHTML = "";
    ctx.clearRect(0,0,300,300);
};