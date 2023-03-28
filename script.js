let weather = {
    "apikey": "e3b74e69ce5c231b214921b5143ee22e",
    fetchweather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid=" 
        + this.apikey
        )
        .then((ressponse) => ressponse.json())
        .then((data) => this.displayweather(data));
    },
    displayweather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = 
          "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = 
        "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = 
        "Wind speed: " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1501560379-05951a742668?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" + name + "')"
    }, 
    search: function() {
        this.fetchweather(document.querySelector(".search-bar").value);
    }
    };      
document
    .querySelector(".search button")     
    .addEventListener("click", function () {
     weather.search();    
}); 
document
    .querySelector(".search-bar")
    .addEventListener("Keyup", function (event) {
   if (event.key == "Enter") {
    weather.search();    
 }
});