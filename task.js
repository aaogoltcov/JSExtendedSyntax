'use strict';

// Task 1
function getEqRoot(a, b, c) {
    return (Math.pow(b, 2) - (4 * a * c));
}

function rootEq(a, b, c) {
    let root = getEqRoot(a, b, c);
    if (root > 0) {
        return [`${(-b + Math.sqrt(root)) / (2 * a)}`, `${(-b - Math.sqrt(root)) / (2 * a)}`];
    } else if (root === 0) {
        return [`${(-b + Math.sqrt(root)) / (2 * a)}`];
    } else {
        return [];
    }
}

function getResult(a,b,c){
    return rootEq(a, b, c);
}


// Task 2
function getAverageScore(scoreSum, scoreNumbers) {
    return Math.round((scoreSum / scoreNumbers), 2);
}

function getScoreSum(array, arrayLength, iteration=0, scoreSum=0, scoreNumbers=0) {
    for (iteration = iteration; iteration < arrayLength; iteration += 1) {
        if (array[iteration] && scoreNumbers < 5) {
            scoreSum += array[iteration];
            scoreNumbers += 1;
        }
    }
    return [scoreSum, scoreNumbers, iteration];
}

function getAverageMark(marks){
    let arrayLength = marks.length
    if (arrayLength == 0) {
        return 0;
    } else {
        let scoreSum = getScoreSum(marks, arrayLength)
        if (scoreSum[2] > 5 ){
            console.log(`Количество значение в массиве больше 5, обрезали: ${marks.slice(0, 5)}`);
        }
        return getAverageScore(scoreSum[0], scoreSum[1]);
    }
}

// Task 3
function askDrink(name,dateOfBirthday){
    let response = ((new Date().getFullYear() - dateOfBirthday.getFullYear()) >= 18) ?
                    `Не желаете ли олд-фэшн, ${name}?` :
                    `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    return response;
}