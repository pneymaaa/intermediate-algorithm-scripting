function smallestCommons(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let multiple = max;

    for (let i = max; i >= min; i--) {
        if (multiple % i !== 0) {
            multiple += max;
            i = max;
        }
    }

    return multiple;
}

console.log(smallestCommons([1, 3]));
  /**
* [1,3] -> return 6
* 1. 1,2,3
* 2. 1,2,3,4,5
* 1 = 1
* 2 = 2
* 3 = 3
* 4 = 2x2
* 5 = 5
* 
* 3. 2,3,4,5,6,7,8,9,10 => 2520
* 2 = 2--
* 3 = 3--
* 4 = 2x2--
* 5 = 5
* 6 = 2x3--
* 7 = 7
* 8 = 2x2x2
* 9 = 3x3
* 10 = 2x5--
* 
* 2,4,6,8,10

* 3,5,7,9
*/