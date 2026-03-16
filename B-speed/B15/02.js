const pageButton = document.querySelectorAll('.pageButton');
let currentPage = 1;

async function loadData() {
    const res = await fetch('sample-data.csv');
    const datas = await res.text();
    const rows = datas.split('\n');
    const cells = rows.map(data => data.split(','));
    render(cells);
};

function render(rows) {
    tableBody.innerHTML = '';
    let newData = rows.split((currentPage - 1) * 10, 10);
    previousButton.disabled = currentPage == 1;
    nextButton.disabled = currentPage == 5;
    newData.forEach(row => {
        const tr = document.createElement('tr');
        row.forEach(cell => {
            const td = document.createElement('td');
            td.textContent = cell;
            tr.append(td);
        });
        tableBody.append(tr);
    });
    pageButton.forEach((button, i) => {
        button.classList.remove('active');
        if (i == currentPage - 1) button.classList.add('active');
    });
};

previousButton.onclick = () => {
    currentPage--;
    loadData();
};

nextButton.onclick = () => {
    currentPage++;
    loadData();
};

pageButton.forEach((button, i) => {
    button.onclick = () => {
        currentPage = i + 1;
        loadData();
    };
});

loadData();