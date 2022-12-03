import { readFileSync } from "node:fs";

const data = readFileSync("data.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split on newline

//1) 1-rock 2-paper 3=scissors
//2) 0-lost draw-3 win-6
//3)a==x b==y c==z
//4) rock -> scissors scissors->paper paper -> rock
//(rock   paper   scissors)
const actionsop = { A: 1, B: 2, C: 3 };
const actionsmy = { X: 1, Y: 2, Z: 3 };
const dummy = ["A Y", "B X", "C Z"];
const solution = (data) => {
  let sum = 0;
  data.map((data) => {
    if (actionsop[data[0]] === actionsmy[data[2]]) {
      sum += 3 + actionsmy[data[2]];
    } else if (
      (actionsop[data[0]] === 3 && actionsmy[data[2]] === 1) ||
      (actionsop[data[0]] === 2 && actionsmy[data[2]] === 3) ||
      (actionsop[data[0]] === 1 && actionsmy[data[2]] === 2)
    ) {
      sum += 6 + actionsmy[data[2]];
    } else {
      sum += 0 + actionsmy[data[2]];
    }
  });
  return sum;
};

const solution1 = (data) => {
  let sum = 0;

  data.map((data) => {
    if (data[2] === "Y") {
      sum += 3 + actionsop[data[0]];
    } else if (data[2] === "Z") {
      if (data[0] === "A") {
        sum += 6 + 2;
      } else if (data[0] === "B") {
        sum += 6 + 3;
      } else {
        sum += 6 + 1;
      }
    } else {
      if (data[0] === "A") {
        sum += 3;
      } else if (data[0] === "B") {
        sum += 1;
      } else {
        sum += 2;
      }
    }
    console.log(sum);
  });
  return sum;
};
console.log(solution(dummy));
console.log(solution1(data));
