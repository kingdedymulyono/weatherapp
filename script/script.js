const main = document.getElementById("main")
const grid = document.getElementById("grid")
const select = document.getElementById("citySelect")
const input = document.getElementById("inputCity")
const dataCity = document.getElementById("cityData")
const alter = document.getElementById("alert")
const alterMsg = document.getElementById("alertMsg")
const alertBtn = document.getElementById("alertBtn")
const alertBtn1 = document.getElementById("alertBtn1")
const showBtn = document.getElementById("showBtn")
const sendBtn = document.getElementById("sendBtn")
const deleteBtn = document.getElementById("deleteBtn")
const closeBtn = document.querySelectorAll(".close")

let xid = 0
let isClicked = false
let arrCity = []
let arrSaved = []
let wcImg
let wcClass
let wcvClass
let detailsClass
let txtClass
let btnClass

if (arrSaved[0] == null) {
    try {
        if (localStorage.getItem("cities")) {
            let localArr = JSON.parse(localStorage.getItem("cities"))
            localArr.map((l) => {
                arrSaved.push(l)
            })
        } else if (localStorage.getItem("cities") == '[]') {
            try {
                getWeather('start')
            } catch (err) {
                console.log('err', err)
            }
        } else {
            arrSaved.push("Tokyo")
        }
    } catch (err) {
        console.log("There is no localstorage", err)
    }
}
// localStorage.setItem("cities",JSON.stringify(arrSaved))
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
            let isFound = false
            datas.forEach((data) => {
                if (!arrCity.includes(data.location.name.toLowerCase())) {
                    arrCity.push(data.location.name.toLowerCase())
                    select.innerHTML += `
                        <option value="${data.location.name}">${data.location.name}</option>
                    `
                    dataCity.innerHTML += `
                    <option value="${data.location.name}">
                    `
                }
                if (data.current.weather_descriptions == 'Sunny') {
                    wcImg = 'bgsunny.png'
                    wcClass = 'weatherSunny'
                    wcvClass = 'weatherVisualSunny'
                    detailsClass = 'details'
                    txtClass = 'whiteText'
                    btnClass = 'border-neutral-50 text-white duration-300 hover:bg-neutral-50 hover:text-black hover:shadow"'
                } else {
                    wcImg = 'bgdark.png'
                    wcClass = 'weatherDark'
                    wcvClass = 'weatherVisualDark'
                    detailsClass = 'detailsDark'
                    txtClass = 'darkText'
                    btnClass = 'border-neutral-800 text-black duration-300 hover:bg-neutral-800 hover:text-white hover:shadow"'
                }
                if (q == 'start') {
                    console.log("berjalan")
                    return
                }
                if (data.location.name.toLowerCase() == q) {
                    grid.innerHTML += `
                        <div id=${xid} data-aos="fade-up" class="${wcClass} m-4 rounded-4xl rounded-b-2xl shadow-lg">
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
                        ${data.location.lat} , ${data.location.lon} , UTC ${data.location.utc_offset}
                        </span>
                        </div>
                        </div>
                        <p class="my-4 mb-0 ${txtClass} font-semibold">${data.location.country} ${data.location.localtime} </p>
                        <button type="button" 
                        class="close p-2 border rounded-xl mt-2 ${btnClass}">
                        Close Card</button>
                        </div>
                        </div>
                        
                        `
                    isFound = true
                    xid++

                    closeBtn.forEach((btn) => {
                        btn.addEventListener("click", (e) => {
                            console.log(e.target)
                        })
                    })
                }

            })
            if (!isFound) {
                grid.innerHTML += errMsg()
            }
        })
}
arrSaved.forEach((c) => {
    getWeather(c.toLowerCase())
})

///ADD A FUNCTION TO ADD THE NEGGER

function errMsg() {
    return (
        `<div class="errMsg m-4 shadow-lg rounded-4xl">
            <div class="errImgBox rounded-t-4xl">
                <i class="errImg bi bi-exclamation-octagon"></i>
            </div>
            <div class="information p-3">
                <div class="errFlex">
                    <span class="text-2xl whiteText">OOPS</span>
                    <span class="text-sm whiteText">
                        Something went wrong</span>
                        <h2 class="whiteText"></h2>
                </div>
                <div class="flex flex-col gap-2">
                    </div>
        </div>`
    )
}

showBtn.addEventListener('click', () => {
    if (!isClicked) {
        select.parentElement.parentElement.style.display = 'flex'
        main.style.opacity = '.2'
        main.style.filter = 'blur(4px)'
        isClicked = true
    } else {
        select.parentElement.parentElement.style.display = 'none'
        main.style.opacity = '1'
        main.style.filter = ''
        isClicked = false
    }
})

sendBtn.addEventListener("click", () => {
    if (arrCity.includes(input.value.toLowerCase())) {
        arrSaved.push(input.value)
        getWeather(input.value.toLowerCase())
        localStorage.setItem("cities", JSON.stringify(arrSaved))
        select.parentElement.parentElement.style.display = 'none'
        main.style.opacity = '1'
        main.style.filter = ''
    } else {
        select.parentElement.parentElement.style.display = 'none'
        alterMsg.style.display='flex'
        isClicked = false
    }
})


grid.addEventListener("click", (e) => {
    if (e.target.className.toLowerCase().includes('close')) {
        if (e.target.parentElement.parentElement.id == 0) {
            main.style.opacity = '.2'
            main.style.filter = 'blur(4px)'
            alter.style.display = 'flex'
        }
        else {
            e.target.parentElement.parentElement.remove()
            arrSaved.splice(e.target.parentElement.parentElement.id, 1)
            localStorage.setItem("cities", JSON.stringify(arrSaved))
        }
    }
})

alertBtn.addEventListener("click", () => {
    alter.style.display = 'none'
    main.style.opacity = '1'
    main.style.filter = 'blur(0)'
})
alertBtn1.addEventListener("click", () => {
    alterMsg.style.display = 'none'
    main.style.opacity = '1'
    main.style.filter = 'blur(0)'
})

deleteBtn.addEventListener('click', () => {
    localStorage.removeItem("cities")
    location.reload()
})