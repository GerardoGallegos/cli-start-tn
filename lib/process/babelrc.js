const path = require('path')
const createFile = require('../util/createFile')

// TODO - Complete this section
const webpack = (presets, plugins) => {
  const p = presets.map(p => `"${p}"`)
  return `{
  "presets": [${p}],
  "plugins": [${plugins ? `[${plugins}]` : ''}]
}
`
}

// TODO - Complete this section
const rollup = (presets, plugins) => `
{
  "presets": [
    ["env", {
      "modules": false
    }],
    "stage-0",
    "react"
  ],
  "env": {
    "test": {
      "presets": [["env"], "stage-0", "react"]
    }
  }
}
`

module.exports = (rootPath, bundler, babelPresets, babelPlugins) => {
  if (bundler === 'Webpack') {
    createFile(
      path.resolve(rootPath, '.babelrc'),
      webpack(babelPresets, babelPlugins)
    )
  }

  if (bundler === 'Rollup') {
    createFile(
      path.resolve(rootPath, '.babelrc'),
      rollup(babelPresets, babelPlugins)
    )
  }
}
