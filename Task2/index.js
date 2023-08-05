const totalAmt = document.querySelector('#totalAmountinp');
const tipPercentinp = document.querySelector('#tipPercentinp');
const submitBtn = document.querySelector('#submitbtn');
const output = document.querySelector('.outputDisplay');


submitBtn.addEventListener('click',()=>{
    const output2 = Math.ceil((parseInt(tipPercentinp.value)/ 100) * parseInt(totalAmt.value) );
    console.log(tipPercentinp.value , totalAmt.value);
    console.log(output2);
    output.innerHTML = output2 + parseInt(totalAmt.value);
})