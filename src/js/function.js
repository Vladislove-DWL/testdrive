//функция создания первой карточки
export function createCardOneAuthor(button) {   
    const cardOneAuthor = 
    `<div class="card">
        <form>
            <h3>Фамилия автора:</h3>
            <input class="lastname" type="text" placeholder="Пушкин">
            
            <h3>Инициалы автора:</h3>
            <input class="firstname" type="text" placeholder="А. С.">
            
            <h3>Название книги:</h3>
            <input class="nameOfBook" type="text" placeholder="Медный всадник">
            
            <h3>Город издательства:</h3>
            <input class="nameOfCity" type="text" placeholder="Москва">
            
            <h3>Название издательства:</h3>
            <input class="nameOfPublisher" type="text" placeholder="Просвещение">
            
            <h3>Год издания:</h3>
            <input class="yearOfPublishing" type="text" placeholder="1995">
           
            <h3>Количество страниц:</h3>
            <input class="numberOfPage" type="text" placeholder=" 255">     
        </form>
    </div>`;
    button.insertAdjacentHTML('beforeBegin', cardOneAuthor);
}

//функция создания второй карточки
export function createCardTwoAuthor(button) {
    const CardTwoAuthor = 
    `<div class="card">
        <form>
            <h3>Фамилия первого автора:</h3>
            <input class="lastname" type="text" placeholder="Пушкин">
                
            <h3>Инициалы первого автора:</h3>
            <input class="firstname" type="text" placeholder="А. С.">

            <h3>Фамилия второго автора:</h3>
            <input class="lastname2" type="text" placeholder="Толстой">
                
            <h3>Инициалы второго автора:</h3>
            <input class="firstname2" type="text" placeholder="Л. Н.">
                
            <h3>Название книги:</h3>
            <input class="nameOfBook" type="text" placeholder="Медный всадник">
                
            <h3>Город издательства:</h3>
            <input class="nameOfCity" type="text" placeholder="Москва">
                
            <h3>Название издательства:</h3>
            <input class="nameOfPublisher" type="text" placeholder="Просвещение">
                
            <h3>Год издания:</h3>
            <input class="yearOfPublishing" type="text" placeholder="1995">
            
            <h3>Количество страниц:</h3>
            <input class="numberOfPage" type="text" placeholder=" 255">     
        </form>
    </div>`;
    button.insertAdjacentHTML('beforeBegin', CardTwoAuthor);
}

//функция удаления карточки
export function removeCard() {
    let prevcard = document.querySelector('.card');
    if (prevcard) prevcard.remove();
}


//функция провеки содержания инпутов
export function checkInputsNotEmpty() {
    const inputs = document.querySelectorAll('input');

    let hasNotEmptyInputs = true;

    for (let i = 0; i < inputs.length; i++) {
    
        if (inputs[i].value.trim() === '') {
            inputs[i].placeholder = 'Не заполнено';
            hasNotEmptyInputs = false;
        }
    }

    return hasNotEmptyInputs;
}