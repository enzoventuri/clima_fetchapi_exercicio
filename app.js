let cityName = document.getElementById("cityName");
let dateTime = document.getElementById("dateTime");

const daysOfTheWeek = [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
    "Domingo"
]

const findWeather = async (cidade) => {
    let errorMessage = document.querySelector(".state-message .error");

    try {
        let url = `https://corsproxy.io/?https://api.hgbrasil.com/weather?city_name=${cidade}&key=301f885c`;
        let weather = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`);
        let weatherResponse = await weather.json();

        if (weatherResponse.erro) {
            console.log("ERROR");
        }

        cityName.textContent = weatherResponse.results.city_name;

        
        console.log(weatherResponse)
    } catch (erro) {
        errorMessage.hidden = false;
        throw Error(erro);
    }
}

const form = document.getElementById("searchForm");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    let input = document.getElementById("cityInput");
    findWeather(input.value);
    // let inputSplit = input.value.split(" ");
    
    // let cidade = inputSplit[0];
    // let estado = inputSplit.
    
})
     