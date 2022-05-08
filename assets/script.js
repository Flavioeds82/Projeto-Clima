let q = document.querySelector.bind(document);

let digitado = q('#searchInput');


async function procuraLugar(){
   if (digitado.value){
      limpar();
      mostraAviso('Carregando...')
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(digitado.value)}&appid=2bea0ed1c4e4df7aba753f01fc2191f6&units=metric&lang=pt_br`;

      let result = await fetch(url);
      let json = await result.json();
      
      if(json.cod === 200){
         montaTela(json);
      }else{
         limpar();
         mostraAviso('Endereço não encontrado.<br> Tente novamente.');
      }
   }
}
function mostraAviso(txt){
   q('.aviso').innerHTML = txt;
}
function limpar(){
   mostraAviso('');
   q('.resultado').style.display = 'none';

}

function montaTela(json){
   mostraAviso('')
   
   q('.titulo').innerHTML = `${json.name}, ${json.sys.country}`;
   q('.tempInfo').innerHTML = `${json.main.temp} <sup>ºC</sup>`;
   q('.ventoInfo').innerHTML = `${json.wind.speed} <span>km/h</span>`;
   q('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`);
   q('.iconInfo').innerHTML = `${json.weather[0].description}`;
   q('.ventoPonto').style.transform = `rotate(${(json.wind.deg) - 90}deg)`;
   q('.resultado').style.display = 'block';
}


// json.name
// json.sys.country
// json.main.temp
// json.weather[0].icon
// json.weather[0].description
// json.wind.speed
// json.wind.deg