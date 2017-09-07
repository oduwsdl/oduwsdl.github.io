const fs = require('fs-extra')
const path = require('path')
const cp = require('child_process')

const isWin = process.platform === 'win32'



let wd = process.cwd()
if (wd.endsWith('/bin')) {
  wd = wd.substr(0, wd.indexOf('/bin'))
}

const assetsPath = path.join(wd, 'assets')
const nodeMod = path.join(wd, 'node_modules')

const fonts = ['devicons', 'font-awesome']

async function doIt () {
  console.log(wd)
  let nodeDir = await fs.readdir(nodeMod)
  console.log(nodeDir)
}

doIt().catch(error => {
  console.error(error)
})