'use strict';

const { EOL } = require('os');
const { promisify } = require('util');
const { writeFile, readdirSync } = require('fs');
const { relative, join } = require('path');
const { resolve } = require('./config/_util');
const { getConsole } = require('corie-logger');

const logger = getConsole('celia');
const writeFileify = promisify(writeFile);

function getSize(code) {
  return (code.length / 1024).toFixed(2) + 'kb';
}

async function createFile(files, parent, dest) {
  let importString = '';
  let exportString = `export default {${EOL}`;
  files.forEach((file) => {
    const name = file.slice(0, -3);
    importString += `import ${name} from '.${parent}/${file}';${EOL}`;
    exportString += `  ${name},${EOL}`;
  });
  exportString = `${exportString.slice(0, -2)}${EOL}};${EOL}`;
  await writeFileify(dest, importString + exportString).then(() => {
    logger.info(relative(process.cwd(), dest), getSize(exportString));
  }, (err) => {
    console.log(err);
  });
}

async function createIndex(srcDir) {
  const files = readdirSync(srcDir);
  const promises = files
    .filter(file => file.lastIndexOf('.js') === -1 && file.indexOf('_'))
    .map(dir => createFile(readdirSync(join(srcDir, dir)), `/${dir}`, join(srcDir, `${dir}.js`)));
  await Promise.all(promises);

  const jses = files.filter(file => file !== 'index.js' && file.lastIndexOf('.js') > 0);
  await createFile(jses, '', join(srcDir, 'index.js'));
}

createIndex(resolve('src'));
