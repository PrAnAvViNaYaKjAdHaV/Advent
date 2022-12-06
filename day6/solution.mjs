import { readFileSync } from "node:fs";

const data = readFileSync("data.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim(); // Remove starting/ending whitespace

const input = [...data];

const solution = (input) => {
  for (let i = 0; i < input.length - 3; i++) {
    let map = [];
    for (let j = i; j <= i + 3; j++) {
      if (map.includes(input[j])) {
        break;
      }
      map.push(input[j]);
    }
    console.log(map);
    if (map.length === 4) {
      return i + 4;
    }
  }
  return 0;
};

const solution2 = (input) => {
  for (let i = 0; i < input.length - 14; i++) {
    let map = [];
    for (let j = i; j <= i + 13; j++) {
      if (map.includes(input[j])) {
        break;
      }
      map.push(input[j]);
    }
    if (map.length === 14) {
      return i + 14;
    }
  }
  return 0;
};
console.log(solution2(input));
