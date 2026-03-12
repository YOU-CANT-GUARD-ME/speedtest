// Get HTML elements
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const label = document.getElementById("label");
const value = document.getElementById("value");
const legend = document.querySelector(".legend");

let data = [];

// Generate a random color
function rand() {
    return `hsl(${Math.random()*360},70%,60%)`;
}

// Draw the pie chart
function draw() {
    ctx.clearRect(0,0,300,300); // Clear previous drawing
    let total = data.reduce((a,b)=>a+b.v,0);
    let start = 0;

    legend.innerHTML = ""; // Clear legend

    data.forEach(d => {
        let angle = d.v/total * 2*Math.PI;

        // Draw pie slice
        ctx.beginPath();
        ctx.moveTo(150,150);
        ctx.arc(150,150,120,start,start+angle);
        ctx.fillStyle = d.c;
        ctx.fill();

        start += angle;

        // Update legend
        legend.innerHTML += `
        <div style="color:${d.c}">
            ${d.l} (${((d.v/total)*100).toFixed(1)}%)
        </div>`;
    });
}

// Add button click
document.querySelector(".blue").onclick = () => {
    if(!label.value || value.value <= 0) return;

    data.push({
        l: label.value,
        v: +value.value, // Convert string to number
        c: rand()
    });

    label.value = "";
    value.value = "";

    draw();
};

// Clear button click
document.querySelector(".clear-btn").onclick = () => {
    data = [];
    legend.innerHTML = "";
    ctx.clearRect(0,0,300,300);
};