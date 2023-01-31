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

            // Кол-во знаков после запятой у первого числа
            const decimalNumberfirstComponent = firstComponent.toString().match(/\.(\d+)/)?.[1].length
            console.log(decimalNumberfirstComponent);

            // Проверка, если у первого числа один знак после запятой, то при делении будет 1 знак 
            if (decimalNumberfirstComponent === 1) {
                outputContentNode.textContent = result.toFixed(1);

                // Очистить поля
                firstString = '';
                secondString = '';
                thirdString = '';
                return;
            }

            // Кол-во знаков после запятой у результата
            const decimalNumber = result.toString().match(/\.(\d+)/)?.[1].length
            console.log(decimalNumber);

            // Проверка на целочисленный результат
            if (decimalNumber >= 5) {
                outputContentNode.textContent = result.toFixed(5);

                // Очистить поля
                firstString = '';
                secondString = '';
                thirdString = '';
                return;
            } else if (decimalNumber >= 1 && decimalNumber < 5) {
                outputContentNode.textContent = result.toFixed(decimalNumber);

                // Очистить поля
                firstString = '';
                secondString = '';
                thirdString = '';
                return;
            } else {
                outputContentNode.textContent = result;

                // Очистить поля
                firstString = '';
                secondString = '';
                thirdString = '';
                return;
            }
        }
    }


    // Добавить точку: true
    let addDotSecond = true;

    // Проверка на наличие знака во 2 строке
    if (secondString !== '') {
        if (e.target.id === 'divide' || e.target.id === 'multiply') {
            return;
        }

        if (e.target.id === 'minus') {
            thirdString = '-';
            outputContentNode.textContent = thirdString;
            return;
        } else if (e.target.id === 'plus') {
            thirdString = '';
            console.log(thirdString);
            outputContentNode.textContent = thirdString;
            return;
        }

        if (e.target.id === 'dot' && addDotSecond) {
            // Целое число или нет
            const isPoint = thirdString.match(/\./);
            if (isPoint) {
                addDotSecond = false;
                console.log(addDotFirst);
                return;
            }

            thirdString += '0.';
            outputContentNode.textContent = thirdString;
            return;
        }
        thirdString += e.target.id;
        outputContentNode.textContent = thirdString;
        console.log(thirdString);
        return;
    }


    // Добавить точку: true
    let addDotFirst = true;

    // Проверка на пустую 1 строку
    if (e.target.id === 'divide' || e.target.id === 'multiply' || e.target.id === 'minus' || e.target.id === 'plus' || e.target.id === 'equals' || e.target.id === 'del' || e.target.id === 'root' || e.target.id === 'percent') {
        if (firstString === '' || firstString === '-') {
            // Если хотим написать отрицательное число 
            if (e.target.id === 'minus') {
                firstString = '-';
                console.log(firstString);
                outputContentNode.textContent = firstString;
                return;
            } else if (e.target.id === 'plus') {
                firstString = '';
                console.log(firstString);
                outputContentNode.textContent = firstString;
                return;
            }

            console.log('Введите какой-нибудь символ');
            return;
        } else {
            if (e.target.id === 'root') {
                console.log('Вычисляем корень');

                // Вычиляет вадратный корень числа
                let firstNumber = Number(firstString);
                let resultRoot = Math.sqrt(firstNumber);

                // Выводит квадратный корень
                outputContentNode.textContent = resultRoot;

                // Очистить поля
                firstString = '';
                secondString = '';
                return;
            }
            
            secondString = e.target.id;
            outputContentNode.textContent = '';
            console.log(secondString);
        }
    } else {
        if (e.target.id === 'dot' && addDotFirst) {
            console.log(addDotFirst);

            // Чтобы появлялся ноль перед запятой
            if (firstString === '') {
                firstString += '0.';
                outputContentNode.textContent = firstString;
                return;
            } else if (firstString === '-') {
                firstString += '0.';
                outputContentNode.textContent = firstString;
                return;
            }

            // Целое число или нет
            const isPoint = firstString.match(/\./);
            if (isPoint) {
                addDotFirst = false;
                console.log(addDotFirst);
                return;
            }

            firstString += '.';
            outputContentNode.textContent = firstString;
            return;
        }
        firstString += e.target.id;
        console.log(firstString);
        outputContentNode.textContent = firstString;
    }
});