const fs = require('fs')
const path = require('path')

module.exports = (rootPath, content) => {
  const destPath = path.resolve(rootPath)
  fs.writeFileSync(destPath, content, 'utf8')
}
