var input=document.getElementById('input');

var result=document.getElementById('result');
var inputType=document.getElementById('inputType');
var resultType=document.getElementById('resultType');

input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);
var option_from,option_to;
option_from=inputType.value;
option_to=resultType.value;

function myResult(){

   option_from=inputType.value;
   option_to=resultType.value;

     if(option_from==="Meter" && option_to==="Meter" ){
        console.log(input.value);
        result.value=input.value;
     }
     else if(option_from==="Meter" && option_to==="KiloMeter" ){
        console.log(input.value);
        result.value=input.value*0.001;
     }
      else if(option_from==="Meter" && option_to==="CentiMeter" ){
        console.log(input.value);
        result.value=input.value*100;
     }
     else if(option_from==="KiloMeter" && option_to==="Meter" ){
        console.log(input.value);
        result.value=input.value*1000;
     }
    
     else if(option_from==="KiloMeter" && option_to==="CentiMeter" ){
        console.log(input.value);
        result.value=input.value*100000;
     }
    
     else if(option_from==="KiloMeter" && option_to==="KiloMeter" ){
        console.log(input.value);
        result.value=input.value;
     }
     else if(option_from==="CentiMeter" && option_to==="KiloMeter" ){
        console.log(input.value);
        result.value=input.value/100000;
     }
     else if(option_from==="CentiMeter" && option_to==="Meter" ){
        console.log(input.value);
        result.value=input.value/100;
     }
     else if(option_from==="CentiMeter" && option_to==="CentiMeter" ){
        console.log(input.value);
        result.value=input.value;
     }

}