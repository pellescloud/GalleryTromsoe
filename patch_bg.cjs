const fs = require('fs');
const file = 'src/components/BackgroundController.jsx';
let code = fs.readFileSync(file, 'utf8');
code = code.replace(/\{\/\* Overlay to ensure text is readable \*\/\}\n\s*<div className="absolute inset-0 bg-black\/40 mix-blend-multiply pointer-events-none" \/>/g, '');
fs.writeFileSync(file, code);
