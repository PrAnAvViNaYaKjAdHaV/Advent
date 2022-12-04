import { readFileSync } from "node:fs";

const data = readFileSync("data.txt", { encoding: "utf-8" })
  .replace(/\r/g, "")
  .trim()
  .split("\n");

const array = (data) => {
  let op = data.map((data) => {
    return data.replace(/,|-/gi, " ").split(" ");
  });
  return op;
};

const solution = (data) => {
  let d = array(data);
  let num_full_overlaps = 0;
  for (let i = 0; i < d.length; i++) {
    let asgmt1L = parseInt(d[i][0]);
    let asgmt1R = parseInt(d[i][1]);
    let asgmt2L = parseInt(d[i][2]);
    let asgmt2R = parseInt(d[i][3]);

    if (
      (asgmt1L >= asgmt2L && asgmt1R <= asgmt2R) ||
      (asgmt2L >= asgmt1L && asgmt2R <= asgmt1R)
    ) {
      num_full_overlaps++;
    }
  }
  return num_full_overlaps;
};

const solution2 = (data) => {
  let d = array(data);
  let num_full_overlaps = 0;
  for (let i = 0; i < d.length; i++) {
    let asgmt1L = parseInt(d[i][0]);
    let asgmt1R = parseInt(d[i][1]);
    let asgmt2L = parseInt(d[i][2]);
    let asgmt2R = parseInt(d[i][3]);

    if (
      (asgmt1L >= asgmt2L && asgmt1L <= asgmt2R) ||
      (asgmt1R >= asgmt2L && asgmt1R <= asgmt2R) ||
      (asgmt2L >= asgmt1L && asgmt2L <= asgmt1R) ||
      (asgmt2R >= asgmt1L && asgmt2R <= asgmt1R)
    ) {
      num_full_overlaps++;
    }
  }
  return num_full_overlaps;
};

console.log(solution2(data));
