function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    let newArr = []
    arr.forEach(i =>{
        let newObj = {};
        newObj["name"] = i["name"];

        let a = earthRadius + i["avgAlt"];
        let T = 2 * Math.PI * Math.sqrt((Math.pow(a,3)) / GM);

        newObj["orbitalPeriod"] = Math.round(T);
        newArr.push(newObj);
    })
    return newArr;
}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));
  //T= 2 * pi * sqrt( a^3 / mu )
  //a= h + R