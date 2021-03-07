// JavaScript source code

let items = ["test", "hello", "dance!", "sing", "jump"];

console.log(items);

items.push("last");

console.log(items);

items.splice(2, 1);

console.log(items);

let ret = "";

ret += items.slice(0);

console.log(ret);
