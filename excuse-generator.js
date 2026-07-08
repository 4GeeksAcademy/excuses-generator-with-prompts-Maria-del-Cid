const who = ["The dog", "My grandma", "The mailman", "My bird", "My neighbor"];
const action = ["ate", "broke", "lost", "forgot", "damaged"];
const what = ["my homework", "my phone", "the car", "the keys", "my notes"];
const when = ["today", "yesterday", "this morning", "last night", "before class"];

const randomWho = who[Math.floor(Math.random() * who.length)];
const randomAction = action[Math.floor(Math.random() * action.length)];
const randomWhat = what[Math.floor(Math.random() * what.length)];
const randomWhen = when[Math.floor(Math.random() * when.length)];
const excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;

console.log(excuse);
