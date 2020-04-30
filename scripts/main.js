'use strict';

const date = document.querySelector('.pannel__date');
const today = new Date();

today.setDate(today.getDate() + 7);

const firstDate = String(today.getDate()).length < 2
  ? '0' + today.getDate()
  : today.getDate();

const firstMonth = String(today.getDate()).length < 2
  ? '0' + (today.getMonth() + 1)
  : today.getMonth() + 1;

today.setDate(today.getDate() + 7);

const secondDate = String(today.getDate()).length < 2
  ? '0' + today.getDate()
  : today.getDate();

const secondMonth = String(today.getMonth()).length < 2
  ? '0' + (today.getMonth() + 1)
  : today.getMonth() + 1;

const dateString = `${firstMonth}/${firstDate} - ${secondMonth}/${secondDate} `;

date.innerHTML = dateString;
