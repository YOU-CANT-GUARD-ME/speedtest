// Buttons
const $ = id => document.getElementById(id);
const $btns = ["start","stop","resume","reset"].reduce((o,id)=>({...o,[id]:$(id)}),{});
let startTime=0, elapsed=0, rafId;

// Format milliseconds to mm:ss:ms
const format = ms => new Date(ms).toISOString().slice(14,23).replace('.',':');

// Toggle button visibility
const toggleUI = state => {
    $btns.start.classList.toggle("hidden", state!="init");
    $btns.stop.classList.toggle("hidden", state!="run");
    $btns.resume.classList.toggle("hidden", state!="pause");
    $btns.reset.classList.toggle("hidden", state=="init");
};

// Update timer
const update = () => {
    $time.textContent = format(elapsed + performance.now() - startTime);
    rafId = requestAnimationFrame(update);
};

// Actions
const actions = {
    start() { startTime = performance.now(); update(); toggleUI("run"); },
    stop()  { cancelAnimationFrame(rafId); elapsed += performance.now()-startTime; toggleUI("pause"); },
    resume(){ this.start(); },
    reset() { cancelAnimationFrame(rafId); elapsed=0; $time.textContent="00:00:000"; toggleUI("init"); }
};

// Attach events
for(const k in $btns) $btns[k].onclick = () => actions[k]();