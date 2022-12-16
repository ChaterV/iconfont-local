#!/usr/bin/env node

import path from 'path';
import fs from 'fs';
import fse from 'fs-extra';
import colors from 'colors';
import minimist from 'minimist';

const args = minimist<{ output: string }>(process.argv.slice(2));

let outputPath = 'iconfontConfig.json';

if (args.output && typeof args.output === 'string') {
  outputPath = args.output;

  if (outputPath.split('.').pop() !== 'json') {
    outputPath += '.json';
  }
}

const targetFile = path.resolve(outputPath);

if (fs.existsSync(targetFile)) {
  console.error(colors.red(`File "${outputPath}" already exist`));
} else {
  fse.copySync(path.join(__dirname, '../template/iconfontConfig.json'), targetFile);
  console.log(colors.green(`File "${outputPath}" create successful`));
}
