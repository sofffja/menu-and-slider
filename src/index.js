/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import './style.css';
import slideGallery from './slideGallery.js';
import dropDownMenu from './dropDownMenu.js';

const menuBtn = document.querySelector('.menu-button');
const menu = document.querySelector('.menu-dropdown');

slideGallery();
dropDownMenu(menuBtn, menu);
