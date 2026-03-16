let page = 1
const pageBtns = document.querySelectorAll('.pageButton')

const data = await fetch('./sample-data.csv').then(e => e.text())
const rows = data.split('\n')
.map(e => `<tr>${e.split(',').map(e2 => `<td>${e2}</td>`).join('')}</tr>`)

function render() {
    tableBody.innerHTML = rows.slice(10 * (page - 1), 10 * page).join('')
    previousButton.disabled = page === 1
    nextButton.disabled = page === 5
    pageBtns.forEach((btn, i) =>{
        btn.textContent = i + 1
        btn.classList.toggle('active', page === 1 + i)
        btn.classList.toggle('page-info', (page === 1 && i == 3 || page === 5 && i == ))
        if(btn.classList.contains('.page-info')) btn.textContent = "..."
    })
}

previousButton.onclick = () => {page--;render()}
nextButton.onclick = () => {page++;render()}
pageBtns.forEach(e => e.onclick = () => {page = +e.textContent; render()})

render()