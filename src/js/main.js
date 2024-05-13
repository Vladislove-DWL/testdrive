import '../css/styles.css'

import { createCardOneAuthor } from './function'
import { createCardTwoAuthor } from './function'
import { removeCard } from './function'
import { checkInputsNotEmpty } from './function'

//обращаемся к селектору, чтобы знать его значение
const select = document.querySelector('#source');

//обращаемся к кнопке сгененировать, чтобы вставить новую карточку до нее
const buttonGenerate = document.querySelector('.btnGenerate');

//обращаемся к кнопке сбросить
const buttonReset = document.querySelector('.btnReset')

//обращаемся к texarea, чтобы выводить туда результат
const textarea = document.querySelector('.userResult')

//обращаемся к родительскому элементу, благодаря которому повесим обработчик событий на все инпуты
const parentElement = document.querySelector('body')

//создаем счетчик для того, чтобы добавлять перед каждым новым списком литературы
let counter = 0;

//создаем объект, в котором будем хранить данные для создания готового списка
const dataOfList = {};

//обработчик для создания карточки по значению селектора
select.addEventListener('click', () => {
    removeCard();
    if (select.value === 'oneAuthor') {
        createCardOneAuthor(buttonGenerate);
    } else if (select.value === 'twoAuthor') {
        createCardTwoAuthor(buttonGenerate);
    }   
})

//вешаем обработчик события на все инпуты, которые есть на странице
parentElement.addEventListener('change', (event) => {
    const input = event.target;
    if (input.tagName === 'INPUT') {
        const inputClass = input.classList.value;
        dataOfList[inputClass] = input.value; 
    }
})

//вешаем обработчик на кнопку сгенерировать, чтобы получать список литературы
buttonGenerate.addEventListener('click', () => {

    if (checkInputsNotEmpty()) {
    counter++
    let result;

    if (select.value === 'oneAuthor' ) {
        const { lastname, firstname, nameOfBook, nameOfCity, nameOfPublisher, yearOfPublishing, numberOfPage } = dataOfList;
        let newStroke = `${counter}. ${lastname}, ${firstname} ${nameOfBook} / ${firstname} ${lastname}. – ${nameOfCity} : ${nameOfPublisher}, ${yearOfPublishing}. – ${numberOfPage} c. – Текст : непосредственный.`;
        result = newStroke
    } else if (select.value === 'twoAuthor' ) {
        const { lastname, firstname, lastname2, firstname2,  nameOfBook, nameOfCity, nameOfPublisher, yearOfPublishing, numberOfPage } = dataOfList;
        let newStroke = `${counter}. ${lastname}, ${firstname} ${nameOfBook} / ${firstname} ${lastname}, ${firstname2} ${lastname2}. – ${nameOfCity} : ${nameOfPublisher}, ${yearOfPublishing}. – ${numberOfPage} c. – Текст : непосредственный.`;
        result = newStroke
    }

    if (counter !== 0) {
        result += '\n'
    } else {
        result = textarea.value.trim() + newStroke
    }

    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
    textarea.value += result
    }
    
})

//вешаем обработчик события на кнопку сбросить
buttonReset.addEventListener('click', () => {
    textarea.value = '';
    textarea.style.height = 'auto';
    counter = 0;
})

// https://github.com/Vladislove-DWL/testdrive.git