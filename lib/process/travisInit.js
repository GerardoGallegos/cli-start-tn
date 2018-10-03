const path = require('path')

const createFile = require('../util/createFile')

const TRAVIS = `language: node_js
node_js:
  - 9
  - 8
before_script:
  - npm install
`

module.exports = (rootPath) => {
  // Init travis.ym
  createFile(
    path.resolve(rootPath, '.travis.yml'),
    TRAVIS
  )
}
