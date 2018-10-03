const inquirer = require('inquirer')

module.exports = () => inquirer.prompt([
  {
    type: 'list',
    name: 'pushGithub',
    message: 'Do you want push to Github?',
    choices: [ 'Yes', 'No' ],
    default: [ 'Yes' ]
  }
])
