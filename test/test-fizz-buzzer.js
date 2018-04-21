//importing chai
const expect =  require('chai').expect;

//import fizzBuzzer.js
const fizzBuzz = require('../fizzBuzzer');


describe('fizzbuzzer',function(){
//unit test for fizz
  it('should return fizz for set of numbers divisible by 3', function(){
    //set of normal inputs for fizz
    const fizzCases =[
      {num: 3, expected: 'fizz' },
      {num: 6, expected: 'fizz' },
      {num: 9, expected: 'fizz' },
      {num: 12, expected: 'fizz' }
    ];
    
    //forEach input check if you get the expected output
    fizzCases.forEach(function(input){
      const answer = fizzBuzz(input.num);
      expect(answer).to.equal(input.expected);
    });
  });

  
//unit test for buzz
  it('should return buzz for set of numbers divisible by 5', function(){
    //set of normal inputs for buzz
    const buzzCases =[
      {num: 5, expected: 'buzz' },
      {num: 10, expected: 'buzz' },      
      {num: 20, expected: 'buzz' }
    ];
    
    //forEach input check if you get the expected output
    buzzCases.forEach(function(input){
      const answer = fizzBuzz(input.num);
      expect(answer).to.equal(input.expected);
    });
  });


//unit test for fizz-buzz
  it('should return fizz-buzz for set of numbers divisible by 3 and 5', function(){
    //set of normal inputs for buzz
    const fizzBuzzCases =[
      {num: 15, expected: 'fizz-buzz' },
      {num: 30, expected: 'fizz-buzz' },
      {num: 45, expected: 'fizz-buzz' }      
    ];
    
    //forEach input check if you get the expected output
    fizzBuzzCases.forEach(function(input){
      const answer = fizzBuzz(input.num);
      expect(answer).to.equal(input.expected);
    });
  });

//unit test for number neither divisible by 3 or 5 
  it('should return the number for set of numbers neither divisible by 3 and 5', function(){
    //set of normal inputs for buzz
    const notFizzBuzzCases =[
      {num: 1, expected: 1},
      {num: 2, expected: 2},
      {num: 4, expected: 4},
      {num: 7, expected: 7},
      {num: 8, expected: 8}      
    ];
    
    //forEach input check if you get the expected output
    notFizzBuzzCases.forEach(function(input){
      const answer = fizzBuzz(input.num);
      expect(answer).to.equal(input.expected);
    });
  });

//unit test for bad inputs
  it('should return error for inputs other than numbers',function(){
    const badInputs = [true,false,function(){},{},[1,2,3],'any string'];
    try{
      badInputs.forEach(function(input){
        const answer = fizzBuzz(input);
        expect(answer).to.throw('`num` must be a number');
      });
    }catch(err){
      console.log(err.message);
    }
  });
});