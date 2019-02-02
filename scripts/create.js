'use strict';

const { EOL } = require('os');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

function getSize(code) {
  return (code.length / 1024).toFixed(2) + 'kb';
}

const resolve = p => path.resolve(__dirname, '../', p);

function dir2file(dir, dest) {
  if (typeof dir === 'string') {
    dir = [dir];
  }
  let exportString = `'use strict';${EOL}`;
  dir.forEach((dirname) => {
    const fns = fs.readdirSync(resolve(dirname));
    fns.forEach((file) => {
      file = file.slice(0, -3);
      exportString += `exports.${file} = require('./${dir}/${file}');${EOL}`;
    });
  });
  dest = resolve(dest);
  fs.writeFile(dest, exportString, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(chalk.green('%s %s'), path.relative(process.cwd(), dest), getSize(exportString));
    }
  });
}

dir2file('utils', 'utils.js');
