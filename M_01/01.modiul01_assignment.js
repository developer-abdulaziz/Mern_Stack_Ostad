// 1) Topic: Online Store Discount Calculator (If-Else Statement)
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




// 2) Topic: Filter Even Numbers
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

var myNumbers =  [12, 34, 45, 23, 6, 78, 54, 90];
const EvenNumbers = getEvenNumbersOfAnArray(myNumbers);
console.log(EvenNumbers);



// 3) Topic: Multiplication Table Generator
function myfunction(number) {
    
  
    for (let i = 1; i <= 10; i++) {
      const result = i * number;
      console.log(`${i} x ${number} = ${result}`);
    }
  }
  
  // Example usage:
  myfunction(3);

// 4) Topic: Grade Calculator (JavaScript Switch Case)
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