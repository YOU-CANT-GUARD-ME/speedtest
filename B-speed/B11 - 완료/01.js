const $ = e => document.getElementById(e);
const btn = {
    start: $("start"),
    stop: $("stop"),
    resume:  $("resume"),
    reset: $("reset")
};
let startT = 0, elap = 0, rafId;

const format = ms => new Date(ms).toISOString().slice(14,23).replace('.',':');

const toggle = s => {
    btn.start.classList.toggle("hidden", s!="init")
    btn.stop.classList.toggle("hidden", s!="run")
    btn.resume.classList.toggle("hidden", s!="pause")
    btn.reset.classList.toggle("hidden", s=="init")
};

const update = () => {
    time.textContent = format(elep + performance.now() - startT);
    rafId = requestAnimationFrame(update);
};

const actions = {
    start() { startT = performance.now(); update; toggle("run"); },
    stop() { cancelAnimationFrame(rafId); elep += performance.now()-this.startT; toggle("pause") },
    resume() { this.start(); },
    reset() { cancelAnimationFrame(rafId); elep=0; time.textContent="00:00:000"; toggle("init") }
};

for(const k in btn) btn[k].onclick = () => actions[k]();