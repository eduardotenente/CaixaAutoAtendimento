// HEADER
const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hour = date.getHours();
const minutes = date.getMinutes();
const navData = document.querySelector('#nav-data');

if (minutes < 10) {
    navData.innerHTML = `<p style="font-size: 1.2rem;">${hour}:0${minutes}</p>`;
} else {
    navData.innerHTML = `<p style="font-size: 1.2rem;">${hour}:${minutes}</p>`;
}

if (month < 10) {
    navData.innerHTML += `<p style="font-size: 0.9rem;">${day}/0${month}/${year}</p>`;
} else {
    navData.innerHTML += `<p style="font-size: 0.9rem;">${day}/${month}/${year}</p>`;
}