#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const argv = process.argv.slice(2);
const args = {};
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (a.startsWith('--')) {
    const k = a.replace(/^--/, '');
    const v = argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[++i] : true;
    args[k] = v;
  }
}

const srcRoot = args.src || 'public/img';
const minSizeKB = parseInt(args['min-size'] || args.minSize || '150', 10);
const maxWidth = parseInt(args['max-width'] || '1200', 10);
const quality = parseInt(args.quality || '75', 10);

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of list) {
    const res = path.join(dir, entry.name);
    if (entry.isDirectory()) results = results.concat(walk(res));
    else results.push(res);
  }
  return results;
}

async function processFile(file) {
  try {
    const stat = fs.statSync(file);
    if (stat.size < minSizeKB * 1024) return;
    const ext = path.extname(file).toLowerCase();
    const tmp = file + '.opt.tmp';

    let img = sharp(file).rotate();
    const meta = await img.metadata();
    if (meta.width && meta.width > maxWidth) img = img.resize({ width: maxWidth });

    if (ext === '.jpg' || ext === '.jpeg') {
      await img.jpeg({ quality }).toFile(tmp);
    } else if (ext === '.png') {
      await img.png({ compressionLevel: 9, quality }).toFile(tmp);
    } else if (ext === '.webp') {
      await img.webp({ quality }).toFile(tmp);
    } else {
      return;
    }

    fs.renameSync(tmp, file);
    const newStat = fs.statSync(file);
    console.log(`${file} : ${Math.round(stat.size / 1024)}KB -> ${Math.round(newStat.size / 1024)}KB`);
  } catch (err) {
    console.error('failed', file, err.message || err);
  }
}

(async () => {
  const absRoot = path.resolve(srcRoot);
  if (!fs.existsSync(absRoot)) {
    console.error('Source path not found:', absRoot);
    process.exit(1);
  }
  const files = walk(absRoot).filter(f => /\.(jpe?g|png|webp)$/i.test(f));
  for (const f of files) await processFile(f);
  console.log('Done.');
})();
