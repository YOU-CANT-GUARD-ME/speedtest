const $ = s => document.querySelector(s);
const container = $('.container');

class Star {
    constructor() {
        const saved = localStorage.getItem('star');
        saved ? (this.datas = JSON.parse(saved), this.render()) : this.getData();
    }

    update() {
        localStorage.setItem('star', JSON.stringify(this.datas));
        this.render();
    }

    render() {
        container.innerHTML = '';

        this.datas.forEach(e => {
        const div = document.createElement('div');

        div.innerHTML = `
            <div class="box">
            <h1>${e.name}</h1>
            <div>${e.desc}</div>
            </div>
            <div class="star">${e.isStar ? '★' : '☆'}</div>
        `;

        div.querySelector('.star').onclick = () => {
            e.isStar = !e.isStar;
            this.update();
        };

        container.append(div);
        });
    }

    async getData() {
        this.datas = await fetch('./data.json').then(r => r.json());
        this.update();
    }
}

new Star();