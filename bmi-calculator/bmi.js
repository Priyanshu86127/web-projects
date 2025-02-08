const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const bmi_value = document.querySelector('#bmi-value');
const bmi_status = document.querySelector('#bmi-status');
const calculate =document.querySelector('#calculate-bmi');

calculate.addEventListener('click',() =>{
    if(height.value === "" || weight.value === ""){
         alert('Please enter your height and weight');
         return;
    }else{
        let height_m = height.value/100;
        let weight_m = weight.value;
        let bmi = weight_m/(height_m*height_m);
        bmi_value.textContent = bmi.toFixed(2);
        if (bmi<18.5){
            bmi_status.textContent = "Underweight";
        }else if(bmi<25){
            bmi_status.textContent = "Normal";
        }else{
            bmi_status.textContent = "OverWeight"; 
        }
    }
});
