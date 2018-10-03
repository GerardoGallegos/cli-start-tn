const inquirer = require('inquirer')

module.exports = () => inquirer.prompt([
  {
    type: 'list',
    name: 'initializeRepo',
    message: 'Do you want initialize a git repo?',
    choices: [ 'Yes', 'No' ],
    default: [ 'Yes' ]
  }
])
