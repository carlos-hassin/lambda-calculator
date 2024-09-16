// STEP 1 - Get the modules here exported before building out your components
// Don't worry about bringing all of these into the same file.
// Export them as necessary and import each array into its appropriate
// file. No real tricks here just be aware of what is in each array
// and how you'll access the data.



const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];

const operators = [
  {
    id: 0,
    char: "/",
    value: "/"
  },
  {
    id: 1,
    char: "x",
    value: "*"
  },
  {
    id: 2,
    char: "-",
    value: "-"
  },
  {
    id: 3,
    char: "+",
    value: "+"
  },
  {
    id: 4,
    char: "=",
    value: "="
  }
];

const specials = ["C", "+/-", "%"];

export default {numbers, operators, specials}
