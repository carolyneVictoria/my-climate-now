const token = 'fec6b717d4cbefddf91c94e7440a9134';

var form = document.querySelector('#formulario');

let cidade = document.querySelector('#cidade')

var api;






function enterP(evt) {
    if(evt.keyCode == 13 && form.value.length > 0){
        cidade.innerHTML = form.value; 
        form.value = "";

    api = `https://api.openweathermap.org/data/2.5/weather?q=${cidade.innerHTML}&appid=${token}&lang=pt_br&units=metric`

    fetch(api)
    .then((response) =>{
        return response.json()
    })
    .then((data =>{


    let temp = parseInt(data.main.temp);

    if(temp < 25){
        document.body.style.background = "linear-gradient(0deg, rgba(90,168,159,1) 0%, rgba(11,84,113,1) 100%)"
    }
    else{
        document.body.style.background = "linear-gradient(0deg, rgba(237,102,99,1) 0%, rgba(181,43,101,1) 100%)"
    }


    document.querySelector('#temperatura').
    innerHTML = temp;
    
    document.querySelector("#descricao").innerHTML = data.weather[0].description;
 
    document.querySelector("#descricao").style.display = "block";


    }))
    .catch((error =>{
        alert("Algo deu errado. Tente novamente.")
    }))
    }
}

form.addEventListener('keypress', enterP)