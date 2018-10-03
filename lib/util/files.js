const fs = require('fs')
const path = require('path')

module.exports = {
  getRootPath: () => path.resolve(process.cwd()),

  getCurrentDirectoryBase: () => path.basename(process.cwd()),

  fileExist: (filePath) => {
    try {
      return fs.statSync(filePath)
    } catch (err) {
      return false
    }
  },

  directoryExists: (filePath) => {
    try {
      return fs.statSync(filePath).isDirectory()
    } catch (err) {
      return false
    }
  }
}
