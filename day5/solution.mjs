// [C]             [L]         [T]
// [V] [R] [M]     [T]         [B]
// [F] [G] [H] [Q] [Q]         [H]
// [W] [L] [P] [V] [M] [V]     [F]
// [P] [C] [W] [S] [Z] [B] [S] [P]
// [G] [R] [M] [B] [F] [J] [S] [Z] [D]
// [J] [L] [P] [F] [C] [H] [F] [J] [C]
// [Z] [Q] [F] [L] [G] [W] [H] [F] [M]
import { readFileSync } from "node:fs";
const dataMap = [
  [],
  ["Z", "J", "G", "P", "W", "F", "V", "C"],
  ["Q", "L", "R", "C", "L", "G", "R"],
  ["F", "P", "M", "W", "P", "H", "M"],
  ["L", "F", "B", "S", "V", "Q"],
  ["G", "C", "F", "Z", "M", "Q", "T", "L"],
  ["W", "H", "J", "B", "V"],
  ["H", "F", "S", "S"],
  ["F", "J", "Z", "P", "F", "H", "B", "T"],
  ["M", "C", "D"],
];

const dummy = [["Z", "N"], ["M", "C", "D"], ["P"]];

const data = readFileSync("data.txt", { encoding: "utf-8" })
  .replace(/\r/g, "")
  .trim()
  .split("\n");

const solution = (data, dummy) => {
  let ans = "";
  for (let i = 0; i < data.length; i++) {
    const d = data[i].replace(/move|from|to/gi).split(" ");
    const move = d.slice(1, d.length);
    let count = move[0];
    let from = move[2];
    let to = move[4];
    while (count-- > 0) {
      const grab = dummy[from].pop();
      dummy[to].push(grab);
    }
  }
  for (let i = 1; i < dummy.length; i++) {
    ans += dummy[i].pop();
  }
  console.log(dataMap);
  return ans;
};

console.log(solution(data, dataMap));
