const fs = require('fs');

function patchFiles() {
  const files = fs.readdirSync('src/components').filter(f => f.endsWith('.jsx'));

  for (const f of files) {
    const path = `src/components/${f}`;
    let code = fs.readFileSync(path, 'utf8');

    // Convert any text-white/XX to text-primary/XX or just text-primary if that doesn't exist in tailwind 4 but it does.
    code = code.replace(/text-white\/(\d+)/g, 'text-primary/$1');
    code = code.replace(/border-white\/(\d+)/g, 'border-primary/$1');
    code = code.replace(/bg-white\/(\d+)/g, 'bg-white/$1'); // keeping background containers white/translucent as asked

    code = code.replace(/text-white/g, 'text-primary');
    code = code.replace(/border-white/g, 'border-primary');

    // In CuratedSeries, we have bg-black/40 for hover overlay, let's keep it or change to bg-primary/20 like the design syntax
    code = code.replace(/bg-black\/40/g, 'bg-primary/20');

    fs.writeFileSync(path, code);
  }
}

patchFiles();
