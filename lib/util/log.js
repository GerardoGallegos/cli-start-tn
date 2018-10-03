const chalk = require('chalk')

module.exports = {
  success (log) {
    console.log(chalk.green(log))
  },

  warn (log) {
    console.log(chalk.magentaBright(log))
  },

  error (log) {
    console.log(chalk.red(log))
  }
}
