import { products } from "./data/data.js"; // Доступ до данних
import template from "./data/data-template.hbs"; // Доступ до шаблону

const list = document.querySelector(".js-list");

list.innerHTML = template({ products });        // <-- передаём { products }