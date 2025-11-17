function formatValue(value: unknown) {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  }
}



function getLength(value: unknown) {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
}


class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}




function filterByRating(
  books: { title: string; rating: number }[]
): Array<{ title: string; rating: number }> {
  return books?.filter((i, index) => i?.rating >= 4);
}


function filterActiveUsers(
  users: { id: number; name: string; email: string; isActive: boolean }[]
): Array<{ id: number; name: string; email: string; isActive: boolean }> {
  return users.filter((i) => i?.isActive);
}


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



function calculateTotalPrice(products:{name:string,price:number,quantity:number,discount?:number}[]){
    if(products.length<=0){
        return 0;
    }
 return products.reduce((acc,items)=>{
  return acc + ((items?.price*items?.quantity)- (items?.discount ?((items?.price*items?.quantity)*((items?.discount || 0)/100) ):0))
 },0)
}

