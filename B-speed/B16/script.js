const filterButton = document.querySelectorAll('.filter-btn')
let datas
let newDatas
let currentFilter = 0

async function loadData() {
    const res = await fetch('todos.json')
    datas = await res.json()
    newDatas = datas.todos

    render()
}

function render() {
    todoList.innerHTML = ''

    filterButton.forEach((button, i) => {
        button.classList.remove('active')

        if (i == currentFilter) button.classList.add('active')
    })

    newDatas.forEach(data => {
        const div = document.createElement('div')
        div.classList.add('todo-item')
        div.innerHTML = `
            <div class="todo-header">
                <h3 class="todo-title">${data.title}</h3>
                <div class="todo-badges">
                    <span class="badge ${data.priority == 'high' ? 'priority-high' : data.priority == 'medium' ? 'priority-medium' : 'priority-low'}">${data.priority == 'high' ? '높음' : data.priority == 'medium' ? '보통' : '낮음'}</span>
                    <span class="badge status-badge">${data.completed ? '완료' : '진행중'}</span>
                </div>
            </div>
            <p class="todo-description">${data.description}</p>
            <div class="todo-footer">
                <div class="date-info">
                    <span>📅 마감: ${data.dueDate}</span>
                    <span>📝 생성: ${data.createdAt}</span>
                </div>
            </div>
        `

        todoList.append(div)
    })
}

filterButton.forEach((button, i) => {
    button.addEventListener('click', () => {
        if (i == 0) newDatas = datas.todos
        if (i == 1) newDatas = datas.todos.filter(data => !data.completed)
        if (i == 2) newDatas = datas.todos.filter(data => data.completed)
        if (i == 3) newDatas = datas.todos.filter(data => data.priority == 'high')
        button.classList.add('active')
        currentFilter = i
        
        render()
    })
})

loadData()