const divide = require('../index');
const expect = require('chai').expect; 

describe('Divide function', () => {
    it('should divide postive integers correctly', () => {
        //define inputs 
        const a = 8; 
        const b = 4; 
        const expectedAnswer = 2; 

        //invoke the function 
        const acutalAnswer = divide(a, b);

        //assert that expected === actual
        //.equal() assertion from Chai does a strictly equal comparsion
        //This is the line that informs us if test has passed or failed 
        expect(acutalAnswer).to.equal(expectedAnswer)

        //Easier way to write the code above: 
        //expect(divide(8, 4)).to.equal(2);
    })

    //Test is different than one above => we're expecting function to throw an error
    //When exception is thrown its interrupted by handling mechanism of Node
    //We want to be able to have the exception thrown => but avoid normal handling for the test
    //So we wrap the invocation of our function in another function => const fn = () => { divide(a, b) };
    //Then we provide the wrapper function to expect the assertion => expect(fn).to.throw();
    it('should throw an error when divided by 0', () => {
        //define inputs
        const a = 8, b = 0;

        //setup the function call 
        const fn = () => { divide(a, b) }

        //assert that exception is thrown 
        //.throw() assertion returns true as an exception is thrown => false otherwise 
        /*
         Note: 
         - We didn't invoke the function ourselves => expect(fn()).to.throw() = this would be wrong
         - The () invokes the function which causes the expection to be thrown 
         - When we pass the function w.o invoking it => letting Chai handle the invocation & exception handling 
        */
        expect(fn).to.throw();

        //Easier way to write the code above: 
        //expect(() => { divide(8, 0) }).to.throw();
    })
})