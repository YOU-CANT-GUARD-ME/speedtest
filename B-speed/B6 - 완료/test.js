const $ = e => document.querySelector(e);
const $$ = e => [...document.querySelectorAll(e)];

const items = $$('.item li');   // FIXED
const dragbox = $('.dragbox');
const reset = $('.reset');
const itemList = $('.item');    // FIXED

items.forEach(item => {
    item.setAttribute('draggable', 'true');

    item.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', 'dragging');
        e.currentTarget.classList.add('dragging');
    });
});

dragbox.addEventListener('dragover', (e) => e.preventDefault());

dragbox.addEventListener('drop', (e) => {
    e.preventDefault();

    const draggingItem = document.querySelector('.dragging');
    if (draggingItem) {
        draggingItem.classList.remove('dragging');
        dragbox.appendChild(draggingItem);
    }
});

reset.addEventListener('click', () => {
    const allItems = $$('.item li, .dragbox li');

    allItems.forEach(item => {
        item.classList.remove('dragging');
        itemList.appendChild(item);
    });
});