function hearts() {
    const container = document.querySelector('.container');
    const creat = document.createElement('div');
    creat.classList.add("hearts");
    creat.innerHTML = '❤️';
    creat.style.left = Math.random() * 100 + 'vw';
    creat.style.animationDuration = Math.random() * 2 + 3 + 's';
container.appendChild(creat)
setTimeOut ( () => {
    creat.remove()
}, 3000)

}

setInterval(hearts, 1000)