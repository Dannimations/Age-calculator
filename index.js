let isValid = false
const outputYear = document.querySelector('.outputYear');
const outputMonth = document.querySelector('.outputMonth');
const outputDay = document.querySelector('.outputDay');
const submitBtn = document.querySelector('.submitBtn');

const inputYear = document.querySelector('#year');
const inputMonth = document.querySelector('#month');
const inputDay = document.querySelector('#day');
// const submitBtn = document.querySelector(' .submitBtn');

const errorYear = document.querySelector('.errorYear');
const errorMonth = document.querySelector('.errorMonth');
const errorDay = document.querySelector('.errorDay');
// const errorBtn = document.querySelector('.submitBtn');
submitBtn.addEventListener('click', calculateDate)
inputDay.addEventListener('input', e =>{
    if (+inputDay.value > 31){
        errorDay.textContent = 'Must be a valid date';
        isValid = false;
        return;
    }
    else{
        isValid = true;
        errorDay.textContent = '';
    }
    if(inputDay.value === '0'){
        isValid = false
        errorDay.textContent = 'Please enter a valid date';
        isValid = false;
        return;
    }
    else{
        errorDay.textContent = '';
    }
})
inputMonth.addEventListener('input', e =>{
    if (+inputMonth.value > 12){
        errorMonth.textContent = 'Must be a valid month';
        isValid = false;
        return;
    }
    else{
        isValid = true;
        errorMonth.textContent = '';
    }
    if(inputMonth.value === '0'){
        isValid = false
        errorMonth.textContent = 'Please enter a valid month';
        isValid = false;
        return;
    }
    else{
        errorMonth.textContent = '';
    }
})
inputYear.addEventListener('input', e =>{
    if (+inputYear.value > 2024){
        errorYear.textContent = 'Must be a valid year';
        isValid = false;
        return;
    }
    else{
        isValid = true;
        errorYear.textContent = '';
    }
    if(inputYear.value === '0'){
        isValid = false
        errorYear.textContent = 'Please enter a valid month';
        isValid = false;
        return;
    }
    else{
        errorMonth.textContent = '';
    }
})
function calculateDate(){
    if (isValid) {
        let birthDate = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
        console.log(birthDate);
        let birthDateObj = new Date(birthDate);
        let agediffmILL = Date.now() - birthDateObj;
        let agedate = new Date(agediffmILL);
        let ageYears = agedate.getUTCFullYear() - 1970;
        let ageMonth = agedate.getUTCMonth();
        let ageDay = agedate.getUTCDay() - 1;
        outputDay.textContent = ageDay;
        outputMonth.textContent = ageMonth;
        outputYear.textContent = ageYears; 
    }
    else{
        alert('error')
    }
}