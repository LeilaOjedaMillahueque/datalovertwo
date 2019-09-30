//declaro data completa nombre=window.nombreDeData.nombreobjeto
const dataPokemon= window.POKEMON.pokemon;

//declaro data filtrada nombre=window.nombreVentanaData.nombreFunción(parámetro)
const dataFilterResult= window.dataFunction.filterFunction(dataPokemon);

//función para mostrar "tarjetas" que contienen la información
function infoPokemon(dataPokemon){

    //creo div contenedor del catálogo
   const pokemonCard=document.createElement("div");

   //recorro e imprimo
   for (let i=0; i<dataPokemon.length; i++){
       //console.log(dataPokemon[i]);

       let imgSpace=document.createElement("img");
       imgSpace.src=dataPokemon[i].img;

       let numSpace=document.createElement("h3");
       numSpace.textContent=dataPokemon[i].num;

       let nameSpace=document.createElement("h3");
       nameSpace.textContent=dataPokemon[i].name;

       let spawnChanceSpace=document.createElement("h3");
       spawnChanceSpace.textContent=dataPokemon[i].spawn_chance+"%";
       
       //asigno hijos al padre
       pokemonCard.appendChild(imgSpace);
       pokemonCard.appendChild(numSpace);
       pokemonCard.appendChild(nameSpace);
       pokemonCard.appendChild(spawnChanceSpace);

       //imprimo catálogo
       document.getElementById("root").appendChild(pokemonCard).innerHTML;
   };
};

//declaro botón catálogo mediante ID
const showCatalogue=document.getElementById("catalogue");

//función catálogo
showCatalogue.addEventListener("click", ()=>{
    document.getElementById("root").innerHTML="";
    infoPokemon(dataPokemon);    
});

//declaro select de orden numerico mediante ID
const showOrderCatalogueOne=document.getElementById("numberOrder");

//función select orden
showOrderCatalogueOne.addEventListener("change", ()=>{
    //se obtiene el valor del select
    let selectedOrderOne=document.getElementById("numberOrder").value;
    //se obtienen parámetros para ordenar
    let callingOrderOne=window.dataFunction.orderFunctionOne(dataPokemon,selectedOrderOne);
    //vuelve a cero la selección
    document.getElementById("root").innerHTML="";
    infoPokemon(callingOrderOne);
});

//declaro select de orden alfabetico mediante ID
const showOrderCatalogueTwo=document.getElementById("alphaOrder");

//función select orden
showOrderCatalogueTwo.addEventListener("change", ()=>{
    //se obtiene el valor del select
    let selectedOrderTwo=document.getElementById("alphaOrder").value;
    //se obtienen parámetros para ordenar
    let callingOrderTwo=window.dataFunction.orderFunctionTwo(dataPokemon,selectedOrderTwo);
    //vuelve a cero la selección
    document.getElementById("root").innerHTML="";
    infoPokemon(callingOrderTwo);
});

//declaro select de filtro mediante ID
const showTypeFilter=document.getElementById("typeFilter");

//función select filtro change propiedad que cambia los valores del select + función
showTypeFilter.addEventListener("change", ()=>{

    //se obtiene el valor del select
    let selectedType=document.getElementById("typeFilter").value;
    //se obtienen parámetros para filtrar
    let callingTypeFilter=window.dataFunction.filterFunction(dataPokemon,selectedType);
    //vuelve a cero la selección
    document.getElementById("root").innerHTML="";
    infoPokemon(callingTypeFilter);
    //console.log(callingTypeFilter);
});

//declaro select de filtro mediante ID
const showKmFilter=document.getElementById("kmFilter");

//función select filtro change propiedad que cambia los valores del select + función
showKmFilter.addEventListener("change", ()=>{

    //se obtiene el valor del select
    let selectedKm=document.getElementById("kmFilter").value;
    console.log(selectedKm);
    //se obtienen parámetros para filtrar
    let callingKmFilter=window.dataFunction.kmFilterFunction(dataPokemon,selectedKm);
    //vuelve a cero la selección
    document.getElementById("root").innerHTML="";
    infoPokemon(callingKmFilter);
    //console.log(callingTypeFilter);
});

//intento calculo
const btnIntento=document.getElementById("intento");

btnIntento.addEventListener("click", ()=>{

    for (let j=0; j<dataPokemon.length; j++){ 
        intentoCalculo=parseInt(dataPokemon[j].spawn_time);
        console.log(intentoCalculo);
        calculo=(intentoCalculo/24)*100;

        const muestraIntento=document.createElement("h1");
        muestraIntento.textContent=(calculo.toFixed(2));

        document.getElementById("root").appendChild(muestraIntento).innerHTML;
    };  
});

//intento calculo con input
//primero filtro por medio del input
const showHrFilter=document.getElementById("0");

showHrFilter.addEventListener("click", ()=>{
    let inputHr=document.getElementById("0").value;
    console.log(inputHr);

})
