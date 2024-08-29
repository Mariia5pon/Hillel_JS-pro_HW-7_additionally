function createSortRemove() {
    function getDigits() {
        let arr = [];
        while (true) {
            let digit = parseInt(prompt('Enter your digit.'));
            if (isNaN(digit) || digit === undefined || digit === null) {
                break;
            }
            arr.push(digit);
        }
        return arr;
    }

    const newArr = getDigits();
    document.getElementById('yourArray').innerHTML = `Your array: ${newArr.join(', ')}`;

    const sortedArr = newArr.sort(compare);
    document.getElementById('sortedArray').innerHTML = `Sorted array: ${sortedArr.join(', ')}`;

    sortedArr.splice(2, 3);

    const arrWithRemovedElements = sortedArr;
    document.getElementById('arrWithRemovedElements').innerHTML = `Array with removed elements: ${arrWithRemovedElements.join(', ')}`;

}

function compare(a, b) {
    return a - b;
}

function givenArray() {
    const givenArr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

    function sumOfPositiveElements() {
        let sum = 0;
        for (let i = 0; i < givenArr.length; i++) {
            if (givenArr[i] > 0) {
                sum += givenArr[i];
            }
        }
        return sum;
    }

    function countOfPositiveElements() {
        let amount = 0;
        for (let i = 0; i < givenArr.length; i++) {
            if (givenArr[i] > 0) {
                amount++;
            }
        }
        return amount;
    }

    const resultOfSum = sumOfPositiveElements();
    const resultOfCount = countOfPositiveElements();
    document.getElementById('item_a').innerHTML = `The sum of positives elements: ${resultOfSum}. Count of positives elements: ${resultOfCount}.`;

    function minimumElementAndItsIndex() {
        let min = givenArr[0];
        let indexOfMin = 0;
        for (let i = 0; i < givenArr.length; i++) {
            if (givenArr[i] < min) {
                min = givenArr[i];
                indexOfMin = i;
            }
        }
        return {min, indexOfMin};
    }

    const resultOfMin = minimumElementAndItsIndex();
    document.getElementById('item_b').innerHTML = `The minimum element: ${resultOfMin.min}. Its index: ${resultOfMin.indexOfMin}.`;

    function maxElementAndItsIndex() {
        let max = givenArr[0];
        let indexOfMax = 0;
        for (let i = 0; i < givenArr.length; i++) {
            if (givenArr[i] > max) {
                max = givenArr[i];
                indexOfMax = i;
            }
        }
        return {max, indexOfMax};
    }

    const resultOfMax = maxElementAndItsIndex();
    document.getElementById('item_c').innerHTML = `The maximum element: ${resultOfMax.max}. Its index: ${resultOfMax.indexOfMax}.`;

    function countOfNegativeElements() {
        let amount = 0;
        for (let i = 0; i < givenArr.length; i++) {
            if (givenArr[i] < 0) {
                amount++;
            }
        }
        return amount;
    }

    const countOfNegative = countOfNegativeElements();
    document.getElementById('item_d').innerHTML = `The count of negatives elements: ${countOfNegative}.`;

    function countOfOddPositiveElements() {
        let amount = 0;
        for (let i = 0; i < givenArr.length; i++) {
            if (givenArr[i] > 0 && givenArr[i] % 2 !== 0) {
                amount++;
            }
        }
        return amount;
    }

    const countOfOddPositive = countOfOddPositiveElements();
    document.getElementById('item_e').innerHTML = `The count of odd positive elements: ${countOfOddPositive}.`;

    function countOfEvenPositiveElements() {
        let amount = 0;
        for (let i = 0; i < givenArr.length; i++) {
            if (givenArr[i] > 0 && givenArr[i] % 2 === 0) {
                amount++;
            }
        }
        return amount;
    }

    const countOfEvenPositive = countOfEvenPositiveElements();
    document.getElementById('item_f').innerHTML = `The count of even positive elements: ${countOfEvenPositive}.`;

    function sumOfEvenPositiveElements() {
        let sum = 0;
        for (let i = 0; i < givenArr.length; i++) {
            if (givenArr[i] > 0 && givenArr[i] % 2 === 0) {
                sum += givenArr[i];
            }
        }
        return sum;
    }

    const sumOfEvenPositive = sumOfEvenPositiveElements();
    document.getElementById('item_g').innerHTML = `The sum of even positive elements: ${sumOfEvenPositive}.`;

    function sumOfOddPositiveElements() {
        let sum = 0;
        for (let i = 0; i < givenArr.length; i++) {
            if (givenArr[i] > 0 && givenArr[i] % 2 !== 0) {
                sum += givenArr[i];
            }
        }
        return sum;
    }

    const sumOfOddPositive = sumOfOddPositiveElements();
    document.getElementById('item_h').innerHTML = `The sum of odd positive elements: ${sumOfOddPositive}.`;

    function productOfPositiveElements() {
        let product = 1;
        for (let i = 0; i < givenArr.length; i++) {
            if (givenArr[i] > 0) {
                product *= givenArr[i];
            }
        }
        return product;
    }

    const productOfPositive = productOfPositiveElements();
    document.getElementById('item_i').innerHTML = `The product of positive elements: ${productOfPositive}.`;

    function stayMaxElement() {
        let max = givenArr[0];
        let arrayWithMax = [];
        for (let i = 0; i < givenArr.length; i++) {
            if (givenArr[i] > max) {
                max = givenArr[i];
            }
        }
        for (let i = 0; i < givenArr.length; i++) {
            if (givenArr[i] !== max) {
                givenArr[i] = 0;
            }
            arrayWithMax.push(givenArr[i]);
        }
        return arrayWithMax;
    }

    const resultArr = stayMaxElement();
    document.getElementById('item_j').innerHTML = `The new array: ${resultArr.join(', ')}.`;

}

function moreThen2000$() {

    let users = [{
        index: 0,
        isActive: true,
        balance: 2226.60,
        name: "Eugenia Sawyer",
        gender: "female",
        phone: "+1 (840) 583-3207",
        address: "949 John Street, Rose, Puerto Rico, 1857"
    }, {
        index: 1,
        isActive: true,
        balance: 2613.77,
        name: "Pauline Gallegos",
        gender: "female",
        phone: "+1 (985) 593-3328",
        address: "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
    }, {
        index: 2,
        isActive: false,
        balance: 3976.41,
        name: "Middleton Chaney",
        gender: "male",
        phone: "+1 (995) 591-2478",
        address: "807 Fleet Walk, Brutus, Arkansas, 9783"
    }, {
        index: 3,
        isActive: true,
        balance: 1934.58,
        name: "Burns Poole",
        gender: "male",
        phone: "+1 (885) 559-3422",
        address: "730 Seba Avenue, Osage, Alabama, 6290"
    }, {
        index: 4,
        isActive: true,
        balance: 3261.65,
        name: "Mcfadden Horne",
        gender: "male",
        phone: "+1 (942) 565-3988",
        address: "120 Scholes Street, Kirk, Michigan, 1018"
    }, {
        index: 5,
        isActive: false,
        balance: 1790.56,
        name: "Suzette Lewis",
        gender: "female",
        phone: "+1 (837) 586-3283",
        address: "314 Dunne Place, Bawcomville, Guam, 9053"
    }]

    function getPhoneArray(array) {
        let arr = [];
        for (let i = 0; i < array.length; i++) {
            if (array[i].balance > 2000) {
                arr.push(array[i].phone);
            }
        }
        return arr;
    }

    const phoneArray = getPhoneArray(users);
    document.getElementById('task_3_result_1').innerHTML = `The array of phone numbers of users whose balance is more than 2000$: ${phoneArray.join("<br>")}.`;

    function calculateSumOfUsersBalances(array) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i].balance;
        }
        return sum;
    }

    const sumOfUsersBalances = calculateSumOfUsersBalances(users);
    document.getElementById('task_3_result_2').innerHTML = `The sum of all users' balances:<br> ${sumOfUsersBalances}.`;
}















