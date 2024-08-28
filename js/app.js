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
            if (givenArr[i] > 0 && givenArr[i]%2!==0) {
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
            if (givenArr[i] > 0 && givenArr[i]%2===0) {
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
            if (givenArr[i] > 0 && givenArr[i]%2===0) {
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
            if (givenArr[i] > 0 && givenArr[i]%2!==0) {
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
            if (givenArr[i] !== max){
                givenArr[i] = 0;
            }
            arrayWithMax.push(givenArr[i]);
        }
        return arrayWithMax;
    }

    const resultArr = stayMaxElement();
    document.getElementById('item_j').innerHTML = `The new array: ${resultArr.join(', ')}.`;

}
















