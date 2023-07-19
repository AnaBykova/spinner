process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinnerPosition = ["|", "/", "-", "\\", "|"];
let time = 1000;

for (let i = 0; i < spinnerPosition.length; i++) {
  setTimeout((index) => {
    process.stdout.write(`\r ${spinnerPosition[index]}`);
  }, time, i);
  time += 500;
}

setTimeout(() => {
  console.log();
}, time);

/*
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 700);

setTimeout(() => {
  console.log(' ');
}, 900);

*/