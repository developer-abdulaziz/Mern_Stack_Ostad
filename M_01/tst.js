// //=============== swtich case ============//
// var marks = 50;
// switch(true){
//     case(marks <= 100 && marks >= 80):
//     document.write('A+');
//     break;

//     case(marks <= 80 && marks >= 70):
//     document.write('A');
//     break;


//     case(marks <= 70 && marks >= 60):
//     document.write('A-');
//     break;


//     case(marks <= 60 && marks >= 50):
//     document.write('B');
//     break;


//     case(marks <= 50 && marks >= 40):
//     document.write('C');
//     break;


//     case(marks <= 40 && marks >= 33):
//     document.write('D');
//     break;

//     default:
//     document.write('F')
// }



/*
var marks = 65;
if(marks <= 100 && marks >= 80){
    document.write('A+')
}
else if(marks< 80 && marks >= 70){
//marks jodi 80 er kom hoi abong marks  70 er theke boro othoba soman
    document.write('A')
}
else if (marks<70 && marks >= 60){
    document.write('A-')
}
else if (marks<60 && marks >= 50){
    document.write('B')
}
else if (marks<60 && marks >= 50){
    document.write('C')
}
else if (marks<50 && marks >= 40){
    document.write('D')
}
else if (marks<40 && marks >= 33){
    document.write('D')
}
else{
    document.write('F')
}
*/


/*
const name = "Alice";
console.log(name.trim().length);
*/


/*
const input = 7;
if(input%2 == 0){
    console.log('this is even number');
}
else{
    console.log('this is odd number')
}
*/


/*
const firstNumber = "5.3";
const secondNumber = 6.56;
const result = parseFloat(firstNumber) + parseFloat(secondNumber);
// const result = parseInt(firstNumber) + parseInt(secondNumber);
console.log(parseInt(result));
*/




// const name = 'Alice';
// console.log('Hello i am '  + name);
// console.log(`Hello i am ${name}`);




//======================== assignment =========================//
/*
function discount(purchase) {
    let discount = 0;
    
    if (purchase >= 50 && purchase <= 100) {
      discount = 5;

    } 
    else if (purchase > 100 && purchase <= 200) {
      discount = 10;

    } 
    else if (purchase > 200) {
      discount = 15;
    }
  
    const discountAmount = (discount / 100) * purchase;
    const discountedTotal = purchase - discountAmount;
  
    console.log(discountedTotal.toFixed(2));
    console.log(discountAmount.toFixed(2));
    

    console.log(purchase.toFixed(2));
    console.log(discount + '%');
  }
  

  
  discount(200);
*/


/*
function getEvenNumbers() {
        var arr =  [12, 34, 45, 23, 6, 78, 54, 90];
    
        for (var i = 0; i < arr.length; i++) {
          if (arr[i] % 2 === 0) {
            console.log(arr[i]);
          }
        }
      }
    
      getEvenNumbers();
*/


/*
function getOddNumbersOfAnArray(numbers) {
    const oddNumbers = [];
    for (i = 0; i < numbers.length; i++) {
        let index = i;
        let element = numbers[index];
        if (element % 2 === 1) {
            // console.log(index, element);
            oddNumbers.push(element);
        }
        // console.log(index, element);
    }
    return oddNumbers;
}

var myNumbers = [12, 65, 45, 78, 32, 45, 91];
const oddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log(oddNumbers);
// const oddNumbersSum = getOddNumbersOfAnArray(oddNumbers);
// console.log("odd number sum".oddNumbersSum);
*/

/*
function getEvenNumbersOfAnArray(numbers) {
    const EvenNumbers = [];
    for (i = 0; i < numbers.length; i++) {
        let index = i;
        let element = numbers[index];
        if (element % 2 === 0) {
            // console.log(index, element);
            EvenNumbers.push(element);
        }
        // console.log(index, element);
    }
    return EvenNumbers;
}

var myNumbers = [12, 65, 45, 78, 32, 45, 91];
const EvenNumbers = getEvenNumbersOfAnArray(myNumbers);
console.log(EvenNumbers);
// const oddNumbersSum = getOddNumbersOfAnArray(oddNumbers);
// console.log("odd number sum".oddNumbersSum);
/*

/*
function myfunction(arr) {
    return arr.filter(num => num % 2 === 0);
  }
  
  const arr = [2,  4, 23, 85, 45, 54, 150];
  const result = myfunction(arr);
  
  console.log( arr);
  console.log(result);
  */

  function calculateGrade(score) {
    switch (true) {
      case score >= 90:
        return 'A';
      case score >= 80 && score <= 89:
        return 'B';
      case score >= 70 && score <= 79:
        return 'C';
      case score >= 60 && score <= 69:
        return 'D';
      default:
        return 'F';
    }
  }
  

  const input = 85;
  const grade = calculateGrade(input);
  console.log( grade);

  function myfunction(number) {
    
  
    for (let i = 1; i <= 10; i++) {
      const result = i * number;
      console.log(`${i} x ${number} = ${result}`);
    }
  }
  
  // Example usage:
  myfunction(5);