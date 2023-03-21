import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');

input.addEventListener('input', debounce(onInputTypeIn, DEBOUNCE_DELAY));

function onInputTypeIn(event) {
  return fetch(
    `https://restcountries.com/v3.1/name/${event.target.value}?fields=name,capital,population,flags`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(response => console.log(response));
}

console.log('sd');
