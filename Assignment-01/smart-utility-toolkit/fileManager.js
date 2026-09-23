const fs = require('fs');

console.log('Creating File...');
fs.writeFileSync('test.txt', 'Hello Node.js\n');
console.log('File Created');

console.log('Reading File');
let content = fs.readFileSync('test.txt', 'utf8');
console.log(content.trim());

console.log('File Updated');
fs.appendFileSync('test.txt', 'Learning FS Module\n');

content = fs.readFileSync('test.txt', 'utf8');
console.log(content.trim());

fs.unlinkSync('test.txt');
console.log('File Deleted');
