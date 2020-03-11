const sum = require('../sumArray');
const expect = require('chai').expect; 

//Sometimes its necessary to ensure that you get the correct type
//Getting a string when you're expecting a # => has strange effects on code that may only show in production


describe('Array sum', () => {
    //This passess because the return value from the function is a Promise => pass
    it('should return a promise', () => {
      expect(sum([1,2,3])).to.be.a('promise');
    });

    //This tests that the promise resolves to a corect value => pass
    //We have to add a .then handler 
     //We invoke the function => then when it resolves we assert that we get the right value
    //We added a return statement => necessary for Mocha to correctly handle async code
    it('should sum an array of numbers', () => {
        return sum([1, 2, 3])
            .then(ans => {
                expect(ans).to.equal(6);
            })
    })

    //This test gets a failure as expected 
    //Problem: we're not checking the type in the function => its performing String concatenation
    //Rather than arithmetic addition => inside sumArray.js
    it('should sum an array of numbers & numeric strings', () => {
        return sum([1, '2', 3])
            .then(ans => {
                expect(ans).to.equal(6);
            })
    })

    //Now that we've added arithmetic addition inside sumArray.js
    //We can now implement this test 
    it('should sum an array of numbers and non-numeric strings', () => {
        return sum([1,'2',3, 'a'])
          .then(ans => {
            //since the type of return value is questionable 
            //We can include such a check in the test with the .a function
            expect(ans).to.be.a('number').that.equal(6);
            //expect(ans).to.equal(6);
          });
      });
  });

  
                