const moduleBundler = require('./bundler')
const babel = require('./babel')
const git = require('./git')
const github = require('./github')
const travis = require('./travis')

module.exports = async () => {
  const { bundler } = await moduleBundler()
  const { babelPresets } = await babel()
  const { initializeRepo } = await git()
  let pushGithub = null
  let initTravis = null

  if (initializeRepo === 'Yes') {
    pushGithub = (await github()).pushGithub
    initTravis = (await travis()).initTravis
  }

  return {
    bundler,
    babelPresets,
    initializeRepo,
    pushGithub,
    initTravis
  }
}
