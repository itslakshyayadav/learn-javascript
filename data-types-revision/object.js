const product = {
  name: "iPhone",
  price: 120000,
  model: 2023,
  imgUrl: "some_Random_url",
};

// const fullName = "Lakshya Yadav";
// fullName = "Vishal";
const myKeys = Object.keys(product);

console.log(product[myKeys[1]]);

// Q1. Use myKeys variable to print price of product above.

const posts = [
  {
    id: 1,
    caption: "Great sunday",
    likes: 19,
    tags: ["#insta", "#sundayfunday"],
  },
  {
    id: 2,
    caption: "Happy friday",
    likes: 45,
    comments: [
      {
        name: "Hitesh",
        followers: 751,
        text: " lakshya",
      },
      {
        name: "Nisha",
        followers: 456,
        text: "Nice piccccc!",
      },
    ],
    tags: ["#happy", "#fun", "#2023", "#india", "#baarish"],
    taggedPeople: [[{ fullName: "Ram" }], [{ fullName: "Monty" }]],
  },
];

// Q2. Print followers for Nisha
console.log(posts[1].comments[1].followers);

// Q3. Print length for tags in second post
console.log(posts[1].tags.length);

// Q4. Print tagged person Monty.
console.log(posts[1].taggedPeople[1][0].fullName);

const options = [
  {
    label: "Apple",
    value: "apple",
  },
  {
    label: "Mango",
    value: "mango",
  },
  {
    label: "Banana",
    value: "banana",
  },
  {
    label: "Pineapple",
    value: "pineapple",
  },
];

console.log(options);
