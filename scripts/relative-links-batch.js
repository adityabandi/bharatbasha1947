const fs = require('fs');
const path = require('path');

function processFile(file) {
  let data = fs.readFileSync(file, 'utf8');
  data = data.replace(/href=(\"|')\/word\//g, 'href=$1word/')
             .replace(/href=(\"|')\/english\//g, 'href=$1english/')
             .replace(/window.location.href=['"]\/word\//g, 'window.location.href="word/')
             .replace(/window.location.href=['"]\/english\//g, 'window.location.href="english/')
             .replace(/`\/word\//g, '`word/')
             .replace(/`\/english\//g, '`english/');
  fs.writeFileSync(file, data);
}

function processList(listFile) {
  const files = fs.readFileSync(listFile, 'utf8').split(/\r?\n/).filter(Boolean);
  for (const f of files) {
    processFile(f);
  }
}

if (process.argv.length < 3) {
  console.error('Usage: node relative-links-batch.js <file-list>');
  process.exit(1);
}

processList(process.argv[2]);
