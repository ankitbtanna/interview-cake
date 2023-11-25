const a = new ArrayBuffer(10);
console.log(a);

const a8 = new Uint8Array(a);
console.log(a8);

a8[0] = 45;
console.log(a);

a8[1] = 45;
console.log(a);

const a16 = new Uint16Array(a);
a16[2] = 45000;
console.log(a);