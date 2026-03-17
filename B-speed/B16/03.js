const buttons = document.querySelectorAll('.filter-btn');
let todos = [], currentFilter = 0;

const filters = [
    t => true,
    t => !t.completed,
    t => t.completed,
    t => t.priority === 'high'
];

async function loadData() {
    todos = (await (await fetch('todos.json')).json()).todos;
    render();
};

function render() {
    buttons.forEach((b, i) => b.classList.toggle('active', i === currentFilter));

    todoList.innerHTML = todos
    .filter(filters[currentFilter])
    .map(t => `
        <div class="todo-item ">
            <div class="todo-header">
                <h3 class="todo-title">${t.title}</h3>
                <div class="todo-badges">
                    <span class="badge priority-${t.priority}">
                        ${t.priority == 'high' ? '높음' : t.priority == 'medium' ? '보통' : '낮음'}
                    </span>
                    <span class="badge status-badge">
                        ${t.completed ? '완료' : '진행중'}
                    </span>
                </div>
            </div>
            <p class="todo-description">${t.description}</p>
            <div class="todo-footer">
                <div class="date-info">
                    <span>📅 마감: ${t.dueDate}</span>
                    <span>📝 생성: ${t.createdAt}</span>
                </div>
            </div>
        </div>        
        `).join('');
};

buttons.forEach((b, i) => {
    b.onclick = () => { currentFilter = i; render(); }
});

loadData();