#!/usr/bin/env node

import * as util from "util";
import child_process from 'child_process'
import path from 'path'
// import minimist from 'minimist'

const iconfontConfigPath = './iconfontConfig.json'
// const args = minimist<{ config: string }>(process.argv.slice(2))
const exec = util.promisify(child_process.exec)
const appPath = path.join(__dirname, './script/iconfont.sh');
const iconFile = require(path.resolve(process.cwd(), iconfontConfigPath))
const runClean = async function () {
    Object.keys(iconFile).forEach(key => {
        iconFile[key] = iconFile[key].replace(/\s*/g,"")
    })
    await exec(`sh ${appPath} ${JSON.stringify(iconFile)}` )
}

runClean()