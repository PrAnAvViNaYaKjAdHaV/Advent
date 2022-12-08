import { readFileSync } from "node:fs";
import { DefaultSerializer } from "node:v8";
import { deflateSync } from "node:zlib";

const data = readFileSync("dummy.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n");

const input = [...data].map((data) => [...data]);

// part 1
function solution(input) {
  let ans = input.length * 2 + (input[0].length - 2) * 2;
  for (let i = 1; i < input.length - 1; i++) {
    for (let j = 1; j < input[0].length - 1; j++) {
      if (check(input, i, j)) {
        console.log(input[i][j]);
        ans++;
      }
    }
  }
  return ans;
}

function check(input, positon1, positon2) {
  let top = true;
  let bottom = true;
  let left = true;
  let right = true;

  //top
  for (let i = positon1 - 1; i >= 0; i--) {
    if (input[i][positon2] >= input[positon1][positon2]) {
      top = false;
      break;
    }
  }
  //bottom
  for (let i = positon1 + 1; i < input.length; i++) {
    if (input[i][positon2] >= input[positon1][positon2]) {
      bottom = false;
      break;
    }
  }
  //left
  for (let i = positon2 - 1; i >= 0; i--) {
    if (input[positon1][i] >= input[positon1][positon2]) {
      left = false;
      break;
    }
  }
  //right
  for (let i = positon2 + 1; i < input.length; i++) {
    if (input[positon1][i] >= input[positon1][positon2]) {
      right = false;
      break;
    }
  }
  return top || bottom || left || right;
}

// part 2
function solution2(input) {
  let ans = -Infinity;
  for (let i = 1; i < input.length - 1; i++) {
    for (let j = 1; j < input[0].length - 1; j++) {
      let cur = check2(input, i, j);
      ans = Math.max(ans, cur);
    }
  }
  return ans;
}

function check2(input, positon1, positon2) {
  let top = 0;
  let bottom = 0;
  let left = 0;
  let right = 0;

  //top
  for (let i = positon1 - 1; i >= 0; i--) {
    if (input[i][positon2] >= input[positon1][positon2]) {
      top++;
      break;
    }
    top++;
  }
  //bottom
  for (let i = positon1 + 1; i < input.length; i++) {
    if (input[i][positon2] >= input[positon1][positon2]) {
      bottom++;
      break;
    }
    bottom++;
  }
  //left
  for (let i = positon2 - 1; i >= 0; i--) {
    if (input[positon1][i] >= input[positon1][positon2]) {
      left++;
      break;
    }
    left++;
  }
  //right
  for (let i = positon2 + 1; i < input.length; i++) {
    if (input[positon1][i] >= input[positon1][positon2]) {
      right++;
      break;
    }
    right++;
  }
  return top * bottom * left * right;
}
console.log(solution2(input));
