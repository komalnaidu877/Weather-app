document.getElementById("fetch-weather").addEventListener("click", function () {
    const city = document.getElementById("city-input").value.trim();

    if (!city) {
        alert("Please enter a city name!");
        return;
    }

    const apiKey = "32ec4f7bc06e444d995113638242111"; // Replace with your actual WeatherAPI key
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(apiUrl)
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
        .then(data => {
            // Display weather data
            document.getElementById("weather-info").style.display = "block";
            document.getElementById("city-name").innerText = `City: ${data.location.name}`;
            document.getElementById("temperature").innerText = `Temperature: ${data.current.temp_c}°C`;
            document.getElementById("description").innerText = `Condition: ${data.current.condition.text}`;
            document.getElementById("humidity").innerText = `Humidity: ${data.current.humidity}%`;
            document.getElementById("wind-speed").innerText = `Wind Speed: ${data.current.wind_kph} km/h`;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            alert("Error fetching weather data. Please try again or check the city name.");
        });
});
