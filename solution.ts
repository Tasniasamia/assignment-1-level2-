//Problem 1

function formatValue(value: unknown) {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  }
}

console.log(formatValue("hello"));
console.log(formatValue(5));
console.log(formatValue(true));

//Problem-2
function getLength(value: unknown) {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
}
console.log(getLength("typescript"));
console.log(getLength([10, 20, 30, 40]));

//Problem-3
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}
const person1 = new Person("John Doe", 30);
console.log(person1.getDetails());
const person2 = new Person("Alice", 25);
console.log(person2.getDetails());

//Problem-4
function filterByRating(
  array: { title: string; rating: number }[]
): Array<{ title: string; rating: number }> {
  return array?.filter((i, index) => i?.rating >= 4);
}
const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];
console.log(filterByRating(books));
//problem-5
function filterActiveUsers(
  array: { id: number; name: string; email: string; isActive: boolean }[]
): Array<{ id: number; name: string; email: string; isActive: boolean }> {
  return array.filter((i) => i?.isActive);
}
const users = [
    { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
    { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
    { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
  ];
console.log(filterActiveUsers(users));

//Problem-6
interface Book{
    title:string,
    author:string,
    publishedYear: number,
    isAvailable: boolean,
}
const myBook: Book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
    isAvailable: true,
  };
  
  function printBookDetails(object:Book){
   console.log(`Title: ${object['title']}, Author: ${object["author"]}, Published: ${object['publishedYear']}, Available: ${object["isAvailable"]?"Yes":"No"}`)
  }
  printBookDetails(myBook);

  //Problem-7
   function getUniqueValues (array1:Array<string|number>,array2:Array<string|number>){
    let newArr=[...array1];
    for(let i=0; i<array2.length;i++){
      let found=false;
     for(let j=0;j<newArr.length;j++){
      if(array2[i]===newArr[j]){
        found=true;
        break;
      }
      
     }

     if(!found){
      newArr=[...newArr,array2[i]]
     }
    }

    return newArr;

}
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));


//Problem-8 
function calculateTotalPrice(products:{name:string,price:number,quantity:number,discount?:number}[]){
    if(products.length<=0){
        return 0;
    }
 return products.reduce((acc,items)=>{
  return acc + ((items?.price*items?.quantity)- (items?.discount ?((items?.price*items?.quantity)*((items?.discount || 0)/100) ):0))
 },0)
}
const products = [
    { name: 'Pen', price: 10, quantity: 2 },
    { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
    { name: 'Bag', price: 50, quantity: 1, discount: 20 },
  ];
  
