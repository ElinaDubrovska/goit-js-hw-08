
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    inputEl: document.querySelector("[name='email']"),
    textareaEl: document.querySelector("[name='message']"),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput,500) );




function onFormSubmit(evt){
   evt.preventDefault();

   console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));

   evt.target.reset();
   localStorage.removeItem(STORAGE_KEY)
}

function onTextareaInput(e){
    formData[e.target.name] = e.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextarea(){
const savedData = localStorage.getItem(STORAGE_KEY);
if(savedData){
    const objData = JSON.parse(savedData);
    refs.inputEl.value = objData.email;
    refs.textareaEl.value = objData.message;
  
}
}

console.log(populateTextarea());