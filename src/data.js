//asignamos nombre a la ventana data.js para volverla global
window.dataFunction={
  orderFunctionOne: (dataPokemon,numberOrder) =>{
    let numberOrderResult="";
    if (numberOrder==="minorToMayor"){
      numberOrderResult=dataPokemon.sort((a,b)=>{
        return a.id-b.id;
      })
    }
    else if (numberOrder==="mayorToMinor"){
      numberOrderResult=dataPokemon.sort((a,b)=>{
        return b.id-a.id;
      })
    };
    return numberOrderResult;
  },

  orderFunctionTwo: (dataPokemon,alphaOrder) =>{
    let alphaOrderResult="";
    if (alphaOrder==="AtoZ"){
      alphaOrderResult=dataPokemon.sort((a,b)=>{
        return a.name.localeCompare(b.name);
      })
    }
    else if (alphaOrder==="ZtoA"){
      alphaOrderResult=dataPokemon.sort((a,b)=>{
        return b.name.localeCompare(a.name)
      })
    };
    return alphaOrderResult;
  },

  filterFunction: (dataPokemon,selectedType) =>{
    const filterResult=dataPokemon.filter(element=>{
      return element.type.includes(selectedType);
    });
    return filterResult;
  },

  kmFilterFunction: (dataPokemon,selectedTypeKm) =>{
    const kmFilterResult=dataPokemon.filter(element=>{
      return element.egg.includes(selectedTypeKm);
    });
    return kmFilterResult;
  },

  //intentoCalcularFunction: (dataPokemon,hr) =>{
    //const hrInput=dataPokemon.filter(element=>{
      //return element.egg.includes(selectedTypeKm);
    //});
    //return kmFilterResult;
  //},
};
