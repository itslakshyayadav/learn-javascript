let rectangleLength = 5;
let rectangleWidth = 2;
rectangleArea = rectangleLength*rectangleWidth;
console.log(rectangleArea);

rectangleLength = 3;
rectangleWidth = 4;
rectangleArea = rectangleLength*rectangleWidth;
console.log(rectangleArea);

//################################# string concate##############################################



// let key1 = "Mr.";
// let key2 = "yadav";
// let fullkey = `Hello ${key1} Lakshya ${key2} how are you .`;
// console.log(fullkey);
// console.log(fullkey.length)

// let name1 = "Anthill";
// let call = name1[name1.length-3];
// console.log(call)
// let name2 = " Noida";
// let fullname = `Hello\'s my name is ${name1}. \nI am live in ${name2}.`;
// console.log(fullname);
// console.log(fullname.length)


// let firstName = "Lakshya";
// let lastName = "Yadav";

// const   fullName = firstName[3]+lastName[2];
// console.log(fullName);

// let fullname = lastName[0];
// console.log(fullname);

// console.log(fullName,fullname);


// let name1 = "Lakshya";
// let name2 = "yadav";
// let call = name1[name1.length-1];
// console.log(call)

// let call1 = name2[name2.length-1];
// console.log(call1)

// console.log(call,call1)



// let fstName = "Vishal";
// let lstName = "Yadav";

// const result = fstName[1]+lstName[1];

// const result1 = fstName[2]+lstName[2];;
// console.log(result);
// console.log(result1);


// console.log(fstName[0], lstName[0]);

// console.log(5, 10);
// console.log(5+10);

// console.log("Im stupid", {x: 10});

// let Name1 = "Vishal";
// let Name2 = "Yadav";
// let Call = Name1[Name1.length-1];
// console.log(Call);

// let Call1 = Name2[Name2.length-1];
// console.log(Call1);

// console.log(Call,Call1);







// let fullName = `${greetWord}, I'm ${firstName} ${lastName}`;
// console.log(fullName);
// let call1 = fullName[fullName.length-1];
// console.log(call1)
// console.log(fullName.length);


// let fstName = "LakshyaYadav";
// let call2 = fstName[7];
// console.log(call2);
// let fName = fstName.substring(0,6);
// console.log(fName);
// newstring = fstName.toLowerCase();
// console.log(newstring);


// let str1 = "Geeks";
// let str2 = "World";
//  let fullstr = str1 + str2;
//  console.log(fullstr);

 

// const firstName = "Vishal";
const firstName = "Ramavatarkumar";
const lastName = "Yadav";

let firstCenter;
let secondCenter;

if (firstName.length % 2 === 0) {
    firstCenter = firstName.length / 2 - 1
} else {
    firstCenter = (firstName.length + 1)/ 2 - 1
}

if (lastName.length % 2 === 0) {
    secondCenter = lastName.length / 2 - 1
} else {
    secondCenter = (lastName.length + 1)/ 2 - 1
}

const result = firstName[firstCenter]+lastName[secondCenter];
console.log(result);