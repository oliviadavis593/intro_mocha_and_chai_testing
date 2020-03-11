
//Function named diff that accepts 2 arrays => a, b
//Return the array that results in removing all the elements of b from a 
//If a = [1, 2, 3] & b = [2] => results should be [1, 3]
function diff(a, b) {
    return a.filter(n => !b.includes(n));
}

module.exports = diff; 