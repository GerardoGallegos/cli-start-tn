const inquirer = require('inquirer')

module.exports = () => inquirer.prompt([
  {
    type: 'list',
    name: 'initTravis',
    message: 'Do you want travis CI?',
    choices: [ 'Yes', 'No' ],
    default: [ 'Yes' ]
  }
])
