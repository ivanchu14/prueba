
let boton = document.querySelector("button")
let input = document.querySelector("#inputPrincipal")

//span
let span = document.querySelector("#cuidad")

//temperatura
let h3 = document.querySelector("#temperatura")


//condicionClimatica
let spanCondicionClimatica = document.querySelector("#condicionClimatica")

//imagen
let img = document.querySelector("img")


let divDelClima = document.querySelector("#divDelClima")

function cargarCuidad(){
    
    divDelClima.classList.add("clima")

    jQuery.getJSON(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es`, function(date){
        console.log(date)
        span.textContent = date.name

        let climaEsNumero =  Math.floor(date.main.temp)
        h3.innerHTML = `${climaEsNumero}<sup>°C</sup>`

        spanCondicionClimatica.textContent = date.weather[0].description

        img.src = ` http://openweathermap.org/img/wn/${date.weather[0].icon}.png`
        
    })
    input.value = ""
}

boton.addEventListener("click", function(){
    if(inputPrincipal.value == ""){
        alert("Puedes probrar poniendo una cuidad")
    } else {
        cargarCuidad()
    }
       
    
})




inputPrincipal.addEventListener("keydown", function(e){
    // console.log(e)
    if(inputPrincipal.value == "" && e.code == "Enter"){
        alert("Puedes probrar poniendo una cuidad")
    } else if(e.code == "Enter"){
       cargarCuidad()
    }
})



