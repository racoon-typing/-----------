// Ноды
const calculatorList = document.querySelector('.calculator__list');
const outputContentNode = document.querySelector('.calculator__output-content');
let result;
let firstString = '';
let secondString = '';
let thirdString = '';

// Слушатель на нажатие
calculatorList.addEventListener('click', (e) => {

    console.log(e.target.id);

    // Очищает поля
    if (e.target.id === 'del') {
        result = 0;
        firstString = '';
        secondString = '';
        thirdString = ''; 
        outputContentNode.textContent = '';
        console.log('Поле очищено');
        return;
    }


    // Проверка на пустую 3 строку
    if (thirdString !== '') {
        if (e.target.id === 'equals') {
            // 1-ое значение
            let firstComponent = Number(firstString);
            // 2-ое значение
            let secondComponent = Number(thirdString);
            console.log(firstComponent);
            console.log(secondComponent);
            console.log(secondString);

            if (secondString === 'divide') {
                result = firstComponent / secondComponent;
            } else if (secondString === 'multiply') {
                result = firstComponent * secondComponent;
            } else if (secondString === 'minus') {
                result = firstComponent - secondComponent;
            } else if (secondString === 'plus') {
                result = firstComponent + secondComponent;
            }

            // Проверка на целочисленный результат
            if (!Number.isInteger(result)) {
                outputContentNode.textContent = result.toFixed(2);
                return;
            } else {
                outputContentNode.textContent = result;
                return;
            }
        }
    }


    // Проверка на наличие знака во 2 строке
    if (secondString !== '') {
        if (e.target.id === 'divide' || e.target.id === 'multiply' || e.target.id === 'minus' || e.target.id === 'plus' || e.target.id === 'del') {
            return;
        } else {
            thirdString += e.target.id;
            outputContentNode.textContent = thirdString;
            console.log(thirdString);
            return;
        }
    }


    // Проверка на пустую 1 строку
    if (e.target.id === 'divide' || e.target.id === 'multiply' || e.target.id === 'minus' || e.target.id === 'plus' || e.target.id === 'equals' || e.target.id === 'del') {
        if (firstString === '') {
            console.log('Введите какой-нибудь символ');
            return;
        } else {
            secondString = e.target.id;

            outputContentNode.textContent = '';
            console.log(secondString);
        }
    } else {
        if (e.target.id === 'dot') {
            firstString += '.';
            return;
        }
        firstString += e.target.id;
        console.log(firstString);
        outputContentNode.textContent = firstString;
    }
});