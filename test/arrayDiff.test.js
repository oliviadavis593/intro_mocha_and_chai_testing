const diff = require('../arrayDiff');
const expect = require('chai').expect; 


//There are several tests that should spring immediately to mind given the defintion of the problem 
/*
- what if a or b is empty? 
- What if b doesn't contain any elements in a? 
- What if a & b contain the same elements? 
Note: 
- Each of these should be a test case 
- Each requires that we compare the array returned by the function to an expected array 
*/

describe('Array diff', () => {

    //What if b doesn't contain any elements in a
    it('should return a if no common elements', () => {
        expect(diff([1, 2, 3], [4, 5, 6])).to.deep.equal([1, 2, 3]);
    })

    //What if a & b contain the same elements
    it('should return [] if same', () => {
        expect(diff([1, 2, 3], [1, 2, 3])).to.deep.equal([]);
    })

    //What if a or b is empty 
    it('returns [] if a or b is empty', () => {
        expect(diff([], [])).to.deep.equal([]);
    })

    it('should return correctly if some elements are removed', () => {
        //Using .eql instead of equal:
        expect(diff([1,2,3], [2])).to.eql([1,3]);
        //expect(diff([1,2,3], [2])).to.deep.equal([1,3]);
    })

    //We assert that the result includes 2 & 3
    //Or we can assert that it doesn't include 1 like so: 
    it('should remove 1 from [1, 2, 3]', () => {
        expect(diff([1, 2, 3], [1])).to.not.include(1);
    })
}) 

//We've used the following assertions: .equal, .eql, .not