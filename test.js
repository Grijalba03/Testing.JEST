// import the function sum from the app.js file
const { fromEuroToDollar, fromYenToPound, fromDollarToYen } = require('./app.js');

// start your first test
// test('10 USD', () => {
//     //inside the test we call our sum function with 2 numbers
//     let total = sum(14, 9);

//     // we expect the sum of those 2 numbers to be 23
//     expect(total).toBe(23);
// });

test("One euro should be 1.2 dollars", function () { 
   let total = fromEuroToDollar(1) 
   expect(total).toBe(1.2) 
}) 

test("100 USD = 10658.33 Yen", function () { 
    let total = fromDollarToYen(100) 
    expect(total).toBe(10658.33) 
 }) 

 test("1000 JPY = 6.25 GPB", function () { 
    let total = fromYenToPound(1000) 
    expect(total).toBe(6.25) 
 }) 