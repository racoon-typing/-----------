// Ноды
const calculatorList = document.querySelector('.calculator__list');
const outputContentNode = document.querySelector('.calculator__output-content');

let firstString = '';
let secondString = '';
let thirddString = '';

// Слушатель на нажатие
calculatorList.addEventListener('click', (e) => {

    // Проверка на пустую 1 строку
    if (e.target.id === 'divide' || e.target.id === 'multiply' || e.target.id === 'minus' || e.target.id === 'plus' || e.target.id === 'equals' || e.target.id === 'del') {
        if (firstString === '') {
            console.log('Введите какой-нибудь символ');
            return;
        } else {
            if (e.target.id === 'divide') {
                secondString = '/';
            } else if (e.target.id === 'multiply') {
                secondString = '*';
            } else if (e.target.id === 'minus') {
                secondString = '-';
            } else if (e.target.id === 'plus') {
                secondString = '+';
            } else {
                firstString = '';
                secondString = '';
            }
            console.log(secondString);

        }
    } else {
        console.log(e.target.id);
        firstString += e.target.id;

    }
    outputContentNode.textContent = firstString;



    // else if (e.target.id === 'divide' || e.target.id === 'multiply' || e.target.id === 'minus' || e.target.id === 'plus') {
    //     if (e.target.id === 'divide') {
    //         secondString += '/';
    //     } else if (e.target.id === 'multiply') {
    //         secondString += '*';
    //     } else if (e.target.id === 'minus') {
    //         secondString += '-';
    //     } else {
    //         secondString += '+';
    //     }
    // } 

    // if (secondString !== '') {

    // }


    // firstString += e.target.id;

    // console.log(firstString);
    // console.log(secondString);



});