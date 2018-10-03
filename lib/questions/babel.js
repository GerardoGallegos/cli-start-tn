const inquirer = require('inquirer')

module.exports = () => inquirer.prompt([
  {
    type: 'checkbox',
    name: 'babelPresets',
    message: 'Select the babel presets:',
    choices: [ 'env', 'react', 'stage-0', 'stage-1', 'stage-2', 'stage-3', 'flow', 'typescript' ],
    default: [ 'env' ]
  }
])
