const fs = require('fs');
const path = require('path');

function process(file) {
  let data = fs.readFileSync(file, 'utf8');
  data = data.replace(/href=(\"|')\/word\//g, 'href=$1word/')
             .replace(/href=(\"|')\/english\//g, 'href=$1english/')
             .replace(/window.location.href=['"]\/word\//g, 'window.location.href="word/')
             .replace(/window.location.href=['"]\/english\//g, 'window.location.href="english/')
             .replace(/`\/word\//g, '`word/')
             .replace(/`\/english\//g, '`english/');
  fs.writeFileSync(file, data);
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walk(full);
    else if (full.endsWith('.html')) process(full);
  }
}

walk(path.join(__dirname, '..', 'docs'));
