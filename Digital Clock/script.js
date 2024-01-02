const hrs = document.querySelector('#hrs');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');
setInterval(() => {
    const currentTime = new Date();
    hrs.innerHTML = ((currentTime.getHours() < 10) ? '0' : '') + currentTime.getHours();
    min.innerHTML = ((currentTime.getMinutes() < 10) ? '0' : '') + currentTime.getMinutes();
    sec.innerHTML = ((currentTime.getSeconds() < 10) ? '0' : '') + currentTime.getSeconds();
}, 1000)