const container = document.querySelector('.container');

class star {
    constructor() {
        const s = localStorage.getItem('star');
        s ? (this.datas = JSON.parse(s), this.render()) : this.getData();
    };

    update() {
        localStorage.setItem('star', JSON.stringify(this.datas));
        this.render();
    };

    render() {
        container.innerHTML = '';

        this.datas.forEach(e => {
            const div = document.createElement('div');

            div.innerHTML = `
            <div class="box">
            <h1>${e.name}</h1>
            <div>${e.desc}</div>
            </div>
            <div class="star">${e.isstar ? '★' : '☆'}</div>`;

            div.querySelector('.star').onclick = () => {
                e.isstar = !e.isstar;
                this.update();
            };

            container.append(div);
        });
    };

    async getData() {
        this.datas = await fetch('./data.json').then(r => r.json());
        this.update();
    };
};

new star();