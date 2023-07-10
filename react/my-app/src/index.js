import fruits from "./foods";
import { Choice,remove } from "./helpers";

let fruit = Choice(fruits);

console.log(`I'd like one ${fruit}, please`);
console.log(`Here you go ${fruit}`);
console.log(`Delicioys! May I have another?`);

let remaining = remove(fruit,fruits);

console.log(`I'm sorry, we're all out. We have ${remaining.length},left`);
