const $ = e => document.querySelector(e),
$$ = e => [...document.querySelectorAll(e)];

const dragbox = $('.dragbox'),
reset = $('.reset'),
itemList = $('.item');

$$('.itme li').forEach(li => {
    li.draggable = true;

    li.ondragstart = e => {
        e.dataTransfer.setData('text', '');
        e.currentTarget.classList.add('dragging');
    };
});

dragbox.ondragover = e => e.preventDefault();

dragbox.ondrop = e => {
    e.preventDefault();
    const d = $('.dragging');
    if (d) dragbox.appendChild(d), d.classList.remove('dragging');
};

reset.onclick = () => 
    $$('.item li, .dragbox li').forEach(li => {
        li.classList.remove('dragging'),
        itemList.appendChild(li);
    });