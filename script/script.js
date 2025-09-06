const main = document.getElementById("main")

let wcImg
let wcClass
let wcvClass
let detailsClass
let txtClass
const getWeather = async (q) => {
    // fetch(`https://api.weatherstack.com/current?access_key=40496ef0db7389d2665ba87a6859aa47&query=${q}`)

    fetch("script/data/dummyWeather.json")
        .then(response => {
            if (!response.ok) {
                console.log(response)
                return (
                    main.querySelector(".grid").innerHTML += errMsg(response)
                )
            }
            return response.json()
        })
        .then(datas => {
            datas.forEach((data) => {

                if (data.current.weather_descriptions == 'Sunny') {
                    wcImg = 'bgsunny.png'
                    wcClass = 'weatherSunny'
                    wcvClass = 'weatherVisualSunny'
                    detailsClass = 'details'
                    txtClass = 'whiteText'
                } else {
                    wcImg = 'bgdark.png'
                    wcClass = 'weatherDark'
                    wcvClass = 'weatherVisualDark'
                    detailsClass = 'detailsDark'
                    txtClass = 'darkText'
                }
                return (
                    main.querySelector(".grid").innerHTML += `
                    <div class="${wcClass} m-4 rounded-4xl rounded-b-2xl">
                <div class="${wcvClass} rounded-t-4xl">
                    <img src="./img/${wcImg}" alt="">
                </div>
                <div class="information p-3">
                    <div class="flex justify-between items-baseline">
                        <span class="text-2xl ${txtClass}">${data.location.name}</span>
                        <span class="text-sm ${txtClass}">${data.location.region}</span>
                    </div>
                    <div class="flex flex-col gap-2">
                        <div class="${detailsClass} font-light p-2 rounded-full">
                            <i class="bi bi-sun-fill"></i>
                            <span class="font-medium">
                                Weather
                                </span>
                                <span class="detailsText float-right font-light">
                                <i class="bi bi-sun"></i>
                                ${data.current.weather_descriptions} 
                                ${data.current.temperature} &deg;c
                                </span>
                                </div>
                                <div class="${detailsClass} font-light p-2 rounded-full">
                                <i class="bi bi-sun"></i>
                                <span class="font-medium">
                                Sun Cycle
                                </span>
                                <span class="detailsText float-right font-light">
                                <i class="bi bi-sunrise"></i>:
                                ${data.current.astro.sunrise} ,
                                <i class="bi bi-sunset"></i>:
                                ${data.current.astro.sunrise}
                                </span>
                                </div>
                                <div class="${detailsClass} font-light p-2 rounded-full">
                                <i class="bi bi-wind"></i>
                                <span class="font-medium">
                                Wind
                                </span>
                                <span class="detailsText float-right font-light">
                                ${data.current.wind_speed}KM/h, 
                                ${data.current.wind_degree} Degree to 
                                ${data.current.wind_dir}
                                </span>
                        </div>
                        <div class="${detailsClass} font-light p-2 rounded-full">
                        <i class="bi bi-clock"></i>
                        <span>
                        Location
                        </span>
                        <span class="detailsText float-right font-light">
                        ${data.location.lat} , ${data.location.lon} , UTC + ${data.location.utc_offset}
                        </span>
                        </div>
                        </div>
                        <p class="my-4 mb-0 ${txtClass} font-semibold">${data.location.country} ${data.location.localtime} </p>
                        </div>
                        </div>
                        
                        `
                )
            })
        })
}
// getWeather("jakarta")
// getWeather("papua")
// getWeather("tokyo")
// getWeather("beijing")
getWeather()

















function errMsg(r) {
    return (

        `<div class="errMsg m-4 rounded-4xl">
            <div class="errImgBox rounded-t-4xl">
                <i class="errImg bi bi-exclamation-octagon"></i>
            </div>
            <div class="information p-3">
                <div class="errFlex">
                    <span class="text-2xl whiteText">OOPS</span>
                    <span class="text-sm whiteText">
                        Something went wrong</span>
                        <h2 class="whiteText">${r.status} ${r.statusText}</h2>
                </div>
                <div class="flex flex-col gap-2">
                    </div>
        </div>`
    )
}