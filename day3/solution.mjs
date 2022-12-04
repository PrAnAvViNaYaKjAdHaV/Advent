import { readFileSync } from "node:fs";

const data = readFileSync("data.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split on newline
const value = [
  " ",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const solution = (data) => {
  let sum = 0;
  data.map((data) => {
    let middle = data.length / 2;
    let first = data.slice(0, middle);
    let second = data.slice(middle, data.length);
    console.log(first, second);
    sum += getValue(first, second);
  });
  return sum;
};
const getValue = (first, second) => {
  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        return value.indexOf(first[i]);
      }
    }
  }
};

const solution1 = (data) => {
  let sum = 0;
  for (let i = 0; i < data.length - 2; i += 3) {
    let cur = getvalue2(data[i], data[i + 1], data[i + 2]);
    sum += cur;
  }
  return sum;
};
const getvalue2 = (first, second, third) => {
  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < second.length; j++) {
      for (let k = 0; k < third.length; k++) {
        if (
          first[i] === second[j] &&
          second[j] === third[k] &&
          third[k] === first[i]
        ) {
          return value.indexOf(first[i]);
        }
      }
    }
  }
};
// console.log(solution(data));
console.log(solution1(data));
