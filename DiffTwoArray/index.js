function diffArray(arr1, arr2) {
    let newArr = [];
    for (let i = 0; i < arr2.length; i++) {
        if (!arr1.includes(arr2[i])) newArr.push(arr2[i]);
    }
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) newArr.push(arr1[i]);
    }
    return newArr;
}


// Imperative solution
function diffArray(arr1, arr2) {
    let newArr = [];

    function onlyInFirst(first, second) {
        for (let i = 0; i < first.length; i++) {
            if (second.indexOf(first[i] === -1)) {
                newArr.push(first[i]);
            }
        }
    }

    onlyInFirst(arr1, arr2);
    onlyInFirst(arr2, arr1);

    return newArr;
}

// Declarative solution
function diffArray(arr1, arr2) {
    return arr1.concat(arr2).filter(item => !arr1.includes(item) | !arr2.includes(item));
}

// Declarative solution
function diffArray(arr1, arr2) {
    return [...diff(arr1, arr2), ...diff(arr2, arr1)]

    function diff(a, b) {
        return a.filter(item => b.indexOf(item) === -1);
    }
}

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);