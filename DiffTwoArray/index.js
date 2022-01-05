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

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);