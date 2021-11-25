console.log('Client side javascript file is loaded!');

const form = document.querySelector('form');
const address = document.querySelector('input[type=search]');
const message = document.querySelector('#msg');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    getWeather(address.value);
});

getWeather = (address) => {
    fetch("http://localhost:3000/weather?address='"+address+"'").then((response) => {
        response.json().then((data) => {
            if(data.error) {
                console.log(data.error)
            } else {
                console.log(data);
                message.innerHTML = data.forecast;
            }
        });
    });
}