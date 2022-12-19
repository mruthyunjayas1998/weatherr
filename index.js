//http://api.openweathermap.org/data/2.5/weather?q=bangalore&units=metric&appid=1cb6532aea3c298a830a71380eace21e
let city = document.getElementById('city')
let country = document.getElementById('country')
let temp = document.getElementById('temp')
let inp = document.getElementById('inp')

// console.log(inp)
// console.log(country)
// console.log(temp)
// console.log(city)




let search= async () => {


    let cityV = inp.value;

    if (cityV == "") {

        alert(" Please  Enter the city NAme");
    }
    else {

        let res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityV}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`)
         console.log(res);

        let data = await res.json()
        city.textContent= data.name
        country.textContent = data.sys.country
        temp.textContent = data.main.temp
        
    }
}