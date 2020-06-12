'use strict';

// Task 1
function getEquationDiscriminant(a, b, c) {
    return (Math.pow(b, 2) - (4 * a * c)); // вычисляем дискриминант
}

function getResult(a, b, c) {
    let root = getEquationDiscriminant(a, b, c);
    if (root > 0) {
        return [(-b + Math.sqrt(root)) / (2 * a), (-b - Math.sqrt(root)) / (2 * a)]; // вычисляем корни
    } else if (root === 0) {
        return [(-b + Math.sqrt(root)) / (2 * a)]; // вычисляем корень
    } else {
        return []; // если дискриминант меньше нуля - возвращаем пустой массив
    }
}

// Task 2
function getScoreSum(array, arrayLength, iteration=0, scoreSum=0, scoreNumbers=0) {
    for (iteration = iteration; iteration < arrayLength; iteration += 1) {
        if (array[iteration] && scoreNumbers < 5) {
            scoreSum += array[iteration];
            scoreNumbers += 1;
        }
        if (iteration > 4 ){
            console.log(`Количество значение в массиве больше 5, обрезали: ${array.slice(0, 5)}`);
            break;
            }
    }
    return [scoreSum, scoreNumbers];
}

function getAverageMark(marks){
    let arrayLength = marks.length
    if (arrayLength == 0) {
        return 0;
    } else {
        let scoreSum = getScoreSum(marks, arrayLength)
        return Math.round((scoreSum[0] / scoreSum[1]), 2);
    }
}

// Task 3
function askDrink(name,dateOfBirthday){
    return ((new Date().getFullYear() - dateOfBirthday.getFullYear()) >= 18) ?
                               `Не желаете ли олд-фэшн, ${name}?` :
                               `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
}