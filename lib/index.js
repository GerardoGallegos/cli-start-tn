#!/usr/bin/env node

const clear = require('clear')
const figlet = require('figlet')
const log = require('./util/log')
const questions = require('./questions')
const { directoryExists, fileExist } = require('./util/files')
const { getRootPath } = require('./util/files')
const moduleBundler = require('./process/moduleBundler')
const babelrc = require('./process/babelrc')
const pk = require('./process/package')
const git = require('./process/git')
const github = require('./process/github')
const travisInit = require('./process/travisInit')
const readme = require('./process/readme')

clear()
log.success(figlet.textSync('Star-TN', { horizontalLayout: 'full' }))

if (directoryExists('.git') || fileExist('webpack.config.js') || fileExist('rollup.config.js')) {
  log.error('Already a project stared here!')
  process.exit()
}

const run = async () => {
  const rootPath = getRootPath()
  const {
    bundler,
    babelPresets,
    initializeRepo,
    pushGithub,
    initTravis
  } = await questions()

  // Inicialize Repo
  if (initializeRepo === 'Yes') {
    await git()

    // Create a repo in Github
    if (pushGithub === 'Yes') {
      await github()
    }
  }

  // Create config files webpack.config.js or rollup.config.js
  await moduleBundler(rootPath, bundler)

  // Create .babelrc
  await babelrc(rootPath, bundler, babelPresets)

  // Create package.json
  await pk(rootPath, bundler, babelPresets)

  // Create .travis.yml
  if (initTravis === 'Yes') {
    await travisInit(rootPath)
  }

  // Create README.md
  await readme(rootPath)

  // Initial Comit

  // Push to Github
}
run()
