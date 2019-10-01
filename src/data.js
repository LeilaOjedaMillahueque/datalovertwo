//asignamos nombre a la ventana data.js para volverla global
window.dataFunction={
//-----------------------------SORT()-----------------------------
  numOrderFunction: (dataPokemon,numberOrder) =>{
    //Creo cadena vacía para luego imprimir el resultado
    let numberOrderResult="";
    if (numberOrder==="minorToMayor"){
      //función sort ordena array convirtiendo valores en string
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

  nameOrderFunction: (dataPokemon,alphaOrder) =>{
    //Creo cadena vacía para luego imprimir el resultado
    let alphaOrderResult="";
    if (alphaOrder==="AtoZ"){
      alphaOrderResult=dataPokemon.sort((a,b)=>{
        //locallCompare permite orden lexicográfico
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
//-----------------------------FILTER()-----------------------------
  typeFilterFunction: (dataPokemon,selectedType) =>{
    //función filter obtiene un subconjunto de elementos del array, que cumpla con cierta condición
    const filterResult=dataPokemon.filter(element=>{
      //includes determina si se incluye un determinado elemento
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

  // funciondeprueba:(checkingCheckBox, spawTimeValue)=>{
  //   const estoesunaprueba=checkingCheckBox.filter(element=>{
  //       return element.checkingCheckBox.includes(spawTimeValue);
  //   });
  //   return estoesunaprueba;
  // },
  

};
