function whatIsInAName(collection, source) {
    const arr = [];
    // Only change code below this line
    collection.map(item => {
        let idx = [];
        for (let key in source) {
            if (item.hasOwnProperty(key) && item[key] === source[key]) {
                idx.push(true)
            } else {
                idx.push(false)
            }
        }
        let bool = idx.every(item => item === true)
        if (bool) arr.push(item);
        idx = [];
    })
    // Only change code above this line
    return arr;
}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 });