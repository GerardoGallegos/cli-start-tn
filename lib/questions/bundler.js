const inquirer = require('inquirer')

module.exports = () => inquirer.prompt([
  {
    type: 'list',
    name: 'bundler',
    message: 'Select the module bundler:',
    choices: [ 'Webpack', 'Rollup' ],
    default: ['Webpack']
  }
])
