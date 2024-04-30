// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


// Подравнять элементыв вверхней полосе хедерапосредине
let widthQuantityGoods = document.querySelector('.quantity-goods');
var width = widthQuantityGoods.offsetWidth;

let emptyElement = document.querySelector('.empty');
emptyElement.style.width = width/4 + 'px';

let favorites = document.querySelector('header .favorites-block');
let favoritesWidth = favorites.offsetWidth;
console.log("Ширина элемента: " + favoritesWidth + " пикселей.");
let widthSearch = document.querySelector('header .search');
widthSearch.style.width = widthSearch + 'px';