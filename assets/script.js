let digitado = document.querySelector('#searchInput');


async function procuraLugar(){
   if (digitado.value){
      mostraAviso('Carregando...')
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(digitado.value)}&appid=2bea0ed1c4e4df7aba753f01fc2191f6&units=metric&lang=pt_br`;

      let result = await fetch(url);
      let json = await result.json();
      console.log(json);
   }
}
function mostraAviso(txt){
   document.querySelector('.aviso').innerHTML = txt;
   

}
