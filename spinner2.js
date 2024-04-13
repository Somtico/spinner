let delay = 100;
const spinnerChars = ['|', '/', '—', '\\', '|', '/', '—', '\\', '|'];

for (const spinner of spinnerChars) {
  setTimeout(() => {
    process.stdout.write(`\r${spinner}   `);
  }, delay);
  
  delay += 200;
}

setTimeout(() => {
  process.stdout.write(`\n`);
}, delay);