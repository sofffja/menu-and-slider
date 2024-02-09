/* eslint-disable no-console */
/* eslint-disable no-undef */
export default function dropDownMenu(button, dropdown) {
  button.addEventListener('click', () => {
    dropdown.classList.toggle('hidden');
  });
}
