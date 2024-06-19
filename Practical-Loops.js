// * Part 1: Fizz Buzz *//

// *Loop through all numbers from 1 to 100.*//
for (let i = 1; i <= 100; i++) {
    // *If a number is divisible by both 3 and 5, log “Fizz Buzz.*//
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('Fizz Buzz');
    }
    // *If a number is divisible by 3, log “Fizz.' *//
    else if (i % 3 === 0) {
        console.log('Fizz');
    } 
    // * If a number is divisible by 5, log “Buzz *//
    else if (i % 5 === 0) {
        console.log('Buzz');
    } 
    // ** If a number is not divisible by either 3 or 5, log the number.*//
    else 
        console.log(i);
    }

// ** Part 2 **//

//* This is to check if a number is prime **//
const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
};

//** Declare an arbitrary number**/
let n = 5; 
// ** This will help you check for primes from n+1 **//
let nextPrime = n + 1;
//**Create a loop that searches for the next prime number, starting at n and incrementing from there. */
while (true) {
    if (isPrime(nextPrime)) {
        console.log(`The next prime number after ${n} is ${nextPrime}`);
        break;
    }
    nextPrime++;
}

//** Part 3 **//

//* CSV data string *//

const csvData = "ID,Name,Occupation,Age\r\n42,Bruce,Knight,41\r\n57,Bob,Fry Cook,19\r\n63,Blaine,Quiz Master,58\r\n98,Bill,Doctor’s Assistant,26";

// ** Function to process CSV data **//
const processCSV = (csv) => {
    let cell = ''; 
    let row = [];   

    // ** Loop through the characters of a given CSV string **//
    for (let i = 0; i < csv.length; i++) {
    const char = csv[i];

    // ** When you encounter a comma, move to the next cell**//
    if (char === ',') {
    row.push(cell);  
    cell = '';  
    } 
    //** When you encounter the \r\n sequence, move to the next row **//
    else if (char === '\r' && csv[i + 1] === '\n') {
    row.push(cell);  
    console.log(...row);  // Log the cells using console.log(cell1, cell2, cell3, cell4)
    cell = '';  
    row = [];  
    i++;  
    } 
    else {
    
    cell += char;
    }
    }

    
    if (cell) row.push(cell);
    if (row.length > 0) console.log(...row);
};

// ** Call the function with the sample CSV data**
processCSV(csvData);