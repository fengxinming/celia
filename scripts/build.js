'use strict';

const { relative } = require('path');
const { remove } = require('fs-extra');
const { dist } = require('../build/utils');
const pack = require('../build/pack');
const cp = require('../build/cp');
const { getLogger } = require('clrsole');

const logger = getLogger('build');

async function build() {
  await remove(dist);
  logger.info(`directory ${relative(process.cwd(), dist)} has been removed`);

  await pack(process.argv.slice(2));

  await cp().catch((err) => {
    logger.error(err);
  });
}

build();
