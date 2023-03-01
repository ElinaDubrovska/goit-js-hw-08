
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input[type="email"]'),
    message: document.querySelector('textarea[name="message"]'),
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
    const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    console.log(formData);
    formData[e.target.name] = e.target.value;
  
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextarea(){
const savedData = localStorage.getItem(STORAGE_KEY);
const parsSaveData = JSON.parse(savedData);
if(savedData){
    !parsSaveData.email
      ? ''
      : (refs.email.value = parsSaveData.email);
    !parsSaveData.message
      ? ''
      : (refs.message.value = parsSaveData.message);
  }
  
}


console.log(populateTextarea());