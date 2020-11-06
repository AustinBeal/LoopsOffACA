// Create a new repo
// Clone it
// Create a branch called loops off of master
// Complete each of the following exercises:
// Use a do...while loop to console.log the numbers from 1 to 1000.


var stringBase = ""
var numbersFromOneToOnethousand = 0;
do {
  stringBase += "The number is " + numbersFromOneToOnethousand;
  numbersFromOneToOnethousand++;
  console.log(numbersFromOneToOnethousand)
}
while (numbersFromOneToOnethousand < 1000);


// Create an object (with keys and values) called person with the following data:


let person1 = 
  {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
}


// Create a function that logs out the keys of the object using Object.keys().


function logKeys(obj){
  loggedKeys = Object.keys(obj)
  console.log(loggedKeys)
}
logKeys(person1)

// Create a function that logs out the keys and values of the object using Object.entries().


function doEntries(){
  for (const [key, value] of Object.entries(person1)){
  console.log("Key = ", key , "Value =" , value)
}
}
doEntries()

// Create an arrayOfPersons that contains multiple "people" objects. You can simply copy/paste the person 
//object you made above multiple times. Feel free to change the values to reflect multiple people you might 
//have in your database.

var arrayOfPersons = 
[{
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
}, {
  firstName: "Mogar",
  lastName: "The Destroyer",
  birthDate: "Sep 18th, 1996",
  gender: "male"
}, {
  firstName: "CT",
  lastName: "Ken",
  birthDate: "May 14, 1965",
  gender: "male"
}, {
  firstName: "Hanna",
  lastName: "Song",
  birthDate: "Dec 9, 1995",
  gender: "female"
}, {
  firstName: "John",
  lastName: "Wayne",
  birthDate: "Jul 27, 1986",
  gender: "male"
}, {
  firstName: "Another",
  lastName: "Lady",
  birthDate: "Aug 1, 1988",
  gender: "female"
}]

// Create a function that uses a for...of loop and an if statement to console.log the value associated with the 
//key birthDate of each object if the birth year is an odd number.



 function checkOddYears(blah){
   for (let e of blah){
    //  console.log(e)
    let bday = e.birthDate
    if((bday.endsWith('1'))||(bday.endsWith('3'))||(bday.endsWith('5'))||(bday.endsWith('7'))||(bday.endsWith('9')) ){
      
      console.log(bday, '...its odd')
    } else{
      console.log(bday)
    }
   }
   }
 checkOddYears(arrayOfPersons)



// Use .map() to map over the arrayOfPersons and console.log() their information.


const letsMap = arrayOfPersons.map(x => x)
console.log(letsMap)

// Use .filter() to filter the persons array and console.log only males in the array.


function letsFilter(holder){
  for(let i of holder){
  let genderTemp = i.gender
  if(genderTemp.length >= 5){
    console.log('Shes a ', genderTemp) 
  } else{
    console.log('Hes a ', genderTemp, i)
  }
}
}

letsFilter(arrayOfPersons)

// Create a function that returns true if the value of birthDate is before Jan 1, 1990.
function birthdaySort(aTemp){
  for(let j of aTemp){
  let bday2 = j.birthDate
  let slicedbday = bday2.split(',')
  let bdayyear = slicedbday.pop()
  // let numberedbdayYear = Number(bdayyear)
  console.log(bdayyear)
  if(bdayyear >= 1990){
    console.log('greater than 1990: ', bday2) 
  } else{
    console.log('less than 1990: ', bday2)
    console.log(true)
    return true
  }
}
}

birthdaySort(arrayOfPersons)

// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.


function letsFilterBirthdays(value){
  for(let k of value){
    value.filter(birthdaySort(k))
  }

}
letsFilterBirthdays(arrayOfPersons)



// BONUS - Create a function that returns true if the date passed to it is >= 21 years in the past.


// BONUS - .filter() out the people in the array who are younger than 21.