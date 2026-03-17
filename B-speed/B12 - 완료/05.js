const $ = e => document.querySelector(e);
const $$ = e => [...document.querySelectorAll(e)];
const f = $("#f"), img = $("#img");
f.onchange = e => img.src = URL.createObjectURL(e.target.files[0]);
$$("button").forEach(btn => btn.onclick = e => img.style.filter = e.target.dataset.filter);