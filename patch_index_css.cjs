const fs = require('fs');
let code = fs.readFileSync('src/index.css', 'utf8');
code = code.replace(/@apply bg-transparent text-white/, '@apply bg-transparent text-primary');
fs.writeFileSync('src/index.css', code);
