function rotateArrays(arr, d, n) {
    const tempArray = [...arr].splice(0, d);
    for (let i = 0; i < d; i++) arr.shift();
    console.log([...arr, ...tempArray].join(' '));
    return [...arr, ...tempArray].join(" ");
}

console.log('###############################');
console.log('Rotate Array');
console.log('###############################');
const input1 = [1,2,3,4,5,6,7,8,9,10];
console.log(`INPUT = ${JSON.stringify(input1)}`)
rotateArrays(input1, 2, 10);

const input2 = [1,2,3,4,5];
console.log(`INPUT = ${JSON.stringify(input2)}`)
rotateArrays(input2, 2, 5);

const input3 = [
  "40",
  "13",
  "27",
  "87",
  "95",
  "40",
  "96",
  "71",
  "35",
  "79",
  "68",
  "2",
  "98",
  "3",
  "18",
  "93",
  "53",
  "57",
  "2",
  "81",
  "87",
  "42",
  "66",
  "90",
  "45",
  "20",
  "41",
  "30",
  "32",
  "18",
  "98",
  "72",
  "82",
  "76",
  "10",
  "28",
  "68",
  "57",
  "98",
  "54",
  "87",
  "66",
  "7",
  "84",
  "20",
  "25",
  "29",
  "72",
  "33",
  "30",
  "4",
  "20",
  "71",
  "69",
  "9",
  "16",
  "41",
  "50",
  "97",
  "24",
  "19",
  "46",
  "47",
  "52",
  "22",
  "56",
  "80",
  "89",
  "65",
  "29",
  "42",
  "51",
  "94",
  "1",
  "35",
  "65",
  "25",
];
console.log(`INPUT = ${JSON.stringify(input3)}`);
rotateArrays(input3, 69, 77);
console.log('###############################');