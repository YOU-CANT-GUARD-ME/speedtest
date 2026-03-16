const pageButton = document.querySelectorAll('.pageButton');
let currentPage = 1;

async function loadData() {
    const rows = (await (await fetch('sample-data.csv')).text())
        .split('\n')
        .map(r => r.split(','));
    render(rows);
};

function render(rows) {
    tableBody.innerHTML = '';

    rows.splice((currentPage - 1) * 10, 10).forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = row.map(cell => `<td>${cell}</td>`).join('');
        tableBody.append(tr);
    });

    previousButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === 5;

    pageButton.forEach((b, i) => {
        b.classList.toggle('active', i === currentPage - 1);
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

pageButton.forEach((b, i) => {
    b.onclick = () => {
        currentPage = i + 1;
    };
});