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
