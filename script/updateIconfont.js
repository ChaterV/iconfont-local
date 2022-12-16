const fs = require('fs')
const path = require('path')
const colors = require("colors");
const iconfontPath = './iconfont.json'
const iconfontTempPath = './iconfontTemp.json'

const main = (iconfontTemp) => {
  if (iconfontTemp?.code && iconfontTemp?.code === 200) {
    const iconfont = require(path.resolve(process.cwd(), iconfontPath))
    const updated_at_temp = iconfontTemp.data?.project?.updated_at
    const updated_at_source = iconfont?.data?.project?.updated_at
    if (updated_at_temp !== updated_at_source) {
      fs.writeFileSync(path.resolve(process.cwd(), iconfontPath), JSON.stringify(iconfontTemp), {
        encoding: 'utf-8',
      })
      console.log(colors.green('✅ finished iconfont update'))
    } else {
      console.log(colors.green('✅ iconfont no need to update'))
    }
  } else {
    console.error(colors.red('❌ iconfont error'))
  }
  fs.unlinkSync(path.resolve(process.cwd(), iconfontTempPath))
}

if (fs.existsSync(path.resolve(process.cwd(), iconfontTempPath))) {
  const iconfontTemp = require(path.resolve(process.cwd(), iconfontTempPath))
  if (fs.existsSync(path.resolve(process.cwd(), iconfontPath))) {
    main(iconfontTemp)
  } else {
    fs.writeFileSync(path.resolve(process.cwd(), iconfontPath), JSON.stringify(iconfontTemp), {
      encoding: 'utf-8',
    })
    fs.unlinkSync(path.resolve(process.cwd(), iconfontTempPath))
    console.log(colors.green('✅ finished iconfont update'))
  }
} else {
  console.error(colors.red('❌ iconfont update error'))
}
