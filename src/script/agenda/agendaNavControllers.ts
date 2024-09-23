import monthController from "../functions/monthController.js";
import getCurrentMonthId from "../functions/getCurrentMonthId.js";

const agendaNextArrow: HTMLButtonElement | null = document.querySelector('.agenda__nav__regulations__arrow-next');
const agendaPrevArrow: HTMLButtonElement | null = document.querySelector('.agenda__nav__regulations__arrow-prev');
const setMonth: HTMLParagraphElement | null = document.querySelector('.agenda__nav__month');
const setCurrentMonth: HTMLButtonElement | null = document.querySelector('.agenda__nav__button');
const currentYear = new Date().getFullYear()

agendaNextArrow?.addEventListener('click', () => {
  (setMonth as HTMLParagraphElement).innerHTML = monthController(true, getCurrentMonthId(setMonth?.textContent || '')) + ' ' + currentYear
});


agendaPrevArrow?.addEventListener('click', () => {
  (setMonth as HTMLParagraphElement).innerHTML = monthController(false, getCurrentMonthId(setMonth?.textContent || '')) + ' ' + currentYear
});

setCurrentMonth?.addEventListener('click', () => {
  (setMonth as HTMLParagraphElement).innerHTML = monthController(true, getCurrentMonthId(setMonth?.textContent || ''), true) + ' ' + currentYear
});
