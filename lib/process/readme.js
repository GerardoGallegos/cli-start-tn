const path = require('path')

const createFile = require('../util/createFile')

const README = `
# cli-start-tn

The CLI are awesome!!
`

module.exports = (rootPath) => {
  // Init README.md
  createFile(
    path.resolve(rootPath, 'README.md'),
    README
  )
}
