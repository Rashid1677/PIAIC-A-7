// Assignment for the week:



//  - Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
let sum:number=0
let sum1:number[]=[]
for (let num = 1; num<=100;num++) {
    if (num%2==0) {
        sum=sum+num
        sum1.push(num)
        
    }
    
}
console.log("sum of even number",sum);
console.log(sum1);

//  - Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones

let i:number[]=[1,2,3,4,5,6,7,8,9,10]
let j:number[]=[]
for (let r = 0; r < i.length; r++) {
    
    if (i [r]%2!=0) {
      j.push(i[r])
      
        
    }
   
   
}
console.log(j);

//  - Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.

let arra:number[]=[1,2,3,4,5,6,7,8,9,10,11,12,13,14]
let arr1:number[]=[]
for (let i = 0; i < arra.length; i++) {
    if (arra[i]%2==0) {
        arr1.push(arra[i])
    }
    
}
console.log("Even num is",arr1);

//  - Write a program that uses a function to find the largest element in an array of numbers.



function findLargest(arr: number[]): number {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;

}




const arr = [1, 5, 2, 8, 3];

const largest = findLargest(arr);

console.log("The largest element in the array is:", largest);

//  - Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.


function removeFailingGrades(grades: number[]): number[] {
  for (let i = grades.length - 1; i >= 0; i--) {
      if (grades[i] < 50) {
          grades.splice(i, 1);
      }
  }
  return grades;
}

const inputGrades: number[] = [85, 42, 60, 30, 75, 90, 25];
const updatedGrades: number[] = removeFailingGrades(inputGrades);

console.log("passing Grades:", inputGrades);




function calculateCircleArea(radius: number): number {
  let area = Math.PI * radius * radius;
  return area;
}

let radius = 5;
let circleArea = calculateCircleArea(radius);

console.log(`The area of a circle with radius ${radius} is ${circleArea.toFixed(2)}`);





