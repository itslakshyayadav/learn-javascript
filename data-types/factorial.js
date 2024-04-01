// factorial 4 = 4 * 3 * 2 * 1 = 24
// factorial 5 = 5 * 4 * 3 * 2 * 1 = 120
// factorial 6 = 6 * 5 * 4 * 3 * 2 * 1 = 720
// factorial 7 = 7 * 6 * 5 * 4 * 3 * 2 * 1 = 5040

// For loop
// function factorial(num) {
//   let total = 1;

//   for (let i = num; i >= 1; i--) {
//     total = i * total;
//   }
//   return total;
// }

// While loop
// function factorial(num) {
//   let total = 1;
//   let i = num;
//   while (i >= 1) {
//     total = total * i;
//     i = i - 1;
//   }
//   return total;
// }
// console.log(factorial(5));
// f(6) = 6 * f(5)
// f(6) = 6 * 5 * 4 *  3 * 2 * f(0)

// Recursion
// function factorial(num) {
//   if (num === 1) {
//     return 1;
//   }
//   const result = num * factorial(num - 1);
//   return result;
// }

// console.log(factorial(4));
// console.log(factorial(6));
// console.log(factorial(7));

const members = [
  {
    head: "Ghanshyam",
    totalMembers: 9,
    members: [
      {
        head: "Maya",
        totalMembers: 5,
        members: [
          {
            head: "Shrinath",
            totalMembers: 4,
          },
          {
            head: "Chintu",
            totalMembers: 4,
          },
        ],
      },
      {
        head: "Ram",
        totalMembers: 4,
      },
      {
        head: "Viram",
        totalMembers: 4,
      },
      {
        head: "Viram",
        totalMembers: 4,
      },
    ],
  },
  {
    head: "Kailash",
    totalMembers: 6,
  },
];

// function findTotalMembers(membersArray) {
//   let total = 0;
//   for (let mem of membersArray) {
//     total = total + mem["totalMembers"];
//     if (mem.members) {
//       total = total + findTotalMembers(mem.members);
//     }
//   }
//   return total;
// }

// console.log(findTotalMembers(members));

let total = 0;
for (let mem of members) {
  console.log(`mem`);
  console.log(mem);
  total = total + mem["totalMembers"];
  if (mem.members) {
    for (let childMem of mem.members) {
      console.log(childMem);
      total = total + childMem["totalMembers"];
      if (childMem.members) {
        for (let grandChildMem of childMem.members) {
          console.log(grandChildMem);
          total = total + grandChildMem["totalMembers"];
        }
      }
    }
  }
}

console.log(total);

// function totalMembers(upArray) {
//   let total = 0;
//   for (let men of upArray) {
//     total = total + men["totalMembers"];
//     if (men.members) {
//       total = total + totalMembers(men.members);
//     }
//   }
//   return total;
// }
// console.log(totalMembers(members));
