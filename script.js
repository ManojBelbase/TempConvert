let claculateTemp=()=>{
    const numberTemp= document.getElementById('temp').value;

    const tempSelected=document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
    console.log(valueTemp);


    const celTofah=(cel)=>{
         let fahrenheit = Math.round((cel*9/5)+32);
         return fahrenheit;
    }


    const fahTocel=(fah)=>{
        let celcius = Math.round((fah -32)*5/9);
        return celcius;
   }

    let result;
    if(valueTemp=='cel'){
        result = celTofah(numberTemp);
        document.getElementById('resultContainer').innerHTML=  ` =  ${result} ℉ahrenheit`;
    }else{
        result = fahTocel(numberTemp);
        document.getElementById('resultContainer').innerHTML=  `=  ${result}  ℃elcius`
    }
}