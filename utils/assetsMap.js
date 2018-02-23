const { readdirSync, writeFileSync } = require('fs')
const { resolve, parse } = require('path')
const crypto = require('crypto')

const files = readdirSync(resolve(__dirname, '../static/images'))
const assets = []
const dateHash = generateDateHash()
let counter = 0

files.forEach(file => {
  if (file !== '.DS_Store') {
    const hash = assets.push({
      [counter]: [parse(file).name, `../static/images/${file}?${dateHash}`]
    })
    counter++
  }
})

writeFileSync(
  resolve(__dirname, './assets.manifest.json'),
  JSON.stringify(assets, null, 2)
)

function generateDateHash() {
  const currentDate = new Date().valueOf().toString()
  return crypto
    .createHash('sha1')
    .update(currentDate)
    .digest('hex')
}
