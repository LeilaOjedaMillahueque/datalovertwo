//declaro data completa nombre=window.nombreDeData.nombreobjeto
const dataPokemon= window.POKEMON.pokemon;

//declaro data filtradas nombre=window.nombreVentanaData.nombreFunción(parámetro)
const dataNumOrderResult= window.dataFunction.numOrderFunction(dataPokemon);
const dataNameOrderResult=window.dataFunction.nameOrderFunction(dataPokemon);
const dataTypeFilterResult= window.dataFunction.typeFilterFunction(dataPokemon);
const dataKmFilterResult=window.dataFunction.kmFilterFunction(dataPokemon);

//-----------------------------CREO TARJETAS-----------------------------
//función para mostrar "tarjetas" que contienen la información
function infoPokemon(dataPokemon){

    //creo div contenedor del catálogo
   const pokemonCard=document.createElement("div");
   pokemonCard.className="pokemonCardStyle";

   //recorro e imprimo
   for (let i=0; i<dataPokemon.length; i++){
       //console.log(dataPokemon[i]);

       let imgSpace=document.createElement("img");
       imgSpace.src=dataPokemon[i].img;

       let numSpace=document.createElement("h3");
       numSpace.textContent=dataPokemon[i].num;

       let nameSpace=document.createElement("h3");
       nameSpace.textContent=("Nombre " + dataPokemon[i].name);

       let spawnChanceSpace=document.createElement("h3");
       spawnChanceSpace.textContent=(dataPokemon[i].spawn_chance+"% posible de aparecer");
       
       //asigno hijos al padre
       pokemonCard.appendChild(imgSpace);
       pokemonCard.appendChild(numSpace);
       pokemonCard.appendChild(nameSpace);
       pokemonCard.appendChild(spawnChanceSpace);

       //imprimo catálogo
       document.getElementById("root").appendChild(pokemonCard).innerHTML;
   }
}

//-----------------------------FUNCIÓN MOSTRAR-----------------------------
//declaro botón catálogo mediante ID
const showCatalogue=document.getElementById("catalogue");

//función catálogo
showCatalogue.addEventListener("click", ()=>{
    //remplaza el contenido con una cadena vacía
    document.getElementById("root").innerHTML="";
    //imprimo la data en la tarjeta
    infoPokemon(dataPokemon);    
});

//-----------------------------ORDEN NUMÉRICO-----------------------------
//declaro select de orden numerico mediante ID
const showOrderCatalogueNum=document.getElementById("numberOrder");

//función select orden
showOrderCatalogueNum.addEventListener("change", ()=>{
    //se obtiene el valor del select
    let selectedOrderNum=document.getElementById("numberOrder").value;
    //se declaran parámetros para ordenar
    let callingOrderNum=window.dataFunction.numOrderFunction(dataPokemon,selectedOrderNum);
    //remplaza el contenido con una cadena vacía
    document.getElementById("root").innerHTML="";
    infoPokemon(callingOrderNum);
});

//-----------------------------ORDEN ALFABETICO-----------------------------
//declaro select de orden alfabetico mediante ID
const showOrderCatalogueName=document.getElementById("alphaOrder");

//función select orden
showOrderCatalogueName.addEventListener("change", ()=>{
    //se obtiene el valor del select
    let selectedOrderName=document.getElementById("alphaOrder").value;
    //se obtienen parámetros para ordenar
    let callingOrderName=window.dataFunction.nameOrderFunction(dataPokemon,selectedOrderName);
    //remplaza el contenido con una cadena vacía
    document.getElementById("root").innerHTML="";
    infoPokemon(callingOrderName);
});

//-----------------------------FILTRO POR TIPO-----------------------------
//declaro select de filtro mediante ID
const showTypeFilter=document.getElementById("typeFilter");

//función select filtro change propiedad que cambia los valores del select + función
showTypeFilter.addEventListener("change", ()=>{

    //se obtiene el valor del select
    let selectedType=document.getElementById("typeFilter").value;
    //se obtienen parámetros para filtrar
    let callingTypeFilter=window.dataFunction.typeFilterFunction(dataPokemon,selectedType);
    //remplaza el contenido con una cadena vacía
    document.getElementById("root").innerHTML="";
    infoPokemon(callingTypeFilter);
    //console.log(callingTypeFilter);
});

//-----------------------------FILTRO POR KM-----------------------------
//declaro select de filtro mediante ID
const showKmFilter=document.getElementById("kmFilter");

//función select filtro change propiedad que cambia los valores del select + función
showKmFilter.addEventListener("change", ()=>{

    //se obtiene el valor del select
    let selectedKm=document.getElementById("kmFilter").value;
    //console.log(selectedKm);
    //se obtienen parámetros para filtrar
    let callingKmFilter=window.dataFunction.kmFilterFunction(dataPokemon,selectedKm);
    //remplaza el contenido con una cadena vacía
    document.getElementById("root").innerHTML="";
    infoPokemon(callingKmFilter);
    //console.log(callingTypeFilter);
});

//-----------------------------INTENTO CÁLCULO FOME-----------------------------
const btnCalculo=document.getElementById("calculo");

btnCalculo.addEventListener("click", ()=>{

    for (let j=0; j<dataPokemon.length; j++){ 
        let spawTimeValue="";
        let calculo="";
        spawTimeValue=parseInt(dataPokemon[j].spawn_time);
        //console.log(spawTimeValue);
        calculo=(spawTimeValue/24)*100;

        const muestraIntento=document.createElement("h1");
        muestraIntento.textContent=(calculo.toFixed(2));

        document.getElementById("root").appendChild(muestraIntento).innerHTML;
    }
});

//-----------------------------INTENTO CÁLCULO MÁS DIVER-----------------------------
//1.Recorro input y obtengo array para compararlo con la data

//declaro llamado de check box por clase
const callingCheckBox=document.getElementsByClassName("checkBoxClass");
//declaro botón para el chequeo de la selección
const checking=document.getElementById("checkBtn");
//función chequeando
checking.addEventListener("click",()=>{
    //creo array vacío
    let checkingCheckBox=[];
    //recorro checkbox
    for(let i=0; i<callingCheckBox.length;i++)
    if (callingCheckBox[i].checked)
    //push
    checkingCheckBox.push(callingCheckBox[i].value);
    //si quiero todo en un solo array [(checkingCheckBox.join(","))]
    //console.log(checkingCheckBox.join(","))
    //console.log(checkingCheckBox);

    for (let j=0; j<dataPokemon.length; j++){ 
        let spawTimeValue="";
        spawTimeValue=[parseInt(dataPokemon[j].spawn_time)];
        console.log(spawTimeValue);
    }

    // const prueba= checkingCheckBox.filter(function(spawTimeValue){
    //     return checkingCheckBox.includes(spawTimeValue)
    // });
    // console.log(prueba)
});

//////PENDIENTE!! PROBAR FILTRANDO Y COMPARANDO Weekness con Type, para trabajar sólo con arrays