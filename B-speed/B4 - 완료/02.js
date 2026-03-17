const c = document.querySelector('#c');
setInterval(() => c.innerText = new Date().toTimeString.slice(0,8),10);