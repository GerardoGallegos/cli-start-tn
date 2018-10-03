const path = require('path')
const createFile = require('../util/createFile')

// TODO - Complete this section
const webpack = (name, description, keywords, author, repo, licence = 'MIT') => `
{
  "name": "${name}",
  "version": "0.0.1",
  "description": "${description}",
  "main": "./lib",
  "scripts": {
    "dev": "webpack -w",
    "build": "webpack",
    "test": "jest",
    "prepare": "npm run build"
  },
  "keywords": [${keywords}],
  "author": "${author}",
  "license": "${licence}",
  "devDependencies": {
    "babel-core": "^6.26.3",
    "babel-eslint": "^9.0.0",
    "babel-jest": "^23.6.0",
    "babel-loader": "^7.1.5",
    "babel-plugin-styled-components": "^1.7.1",
    "babel-preset-env": "^1.7.0",
    "babel-preset-react": "^6.24.1",
    "babel-preset-stage-0": "^6.24.1",
    "enzyme": "^3.6.0",
    "enzyme-adapter-react-16": "^1.5.0",
    "enzyme-to-json": "^3.3.4",
    "expect": "^23.6.0",
    "jest": "^23.6.0",
    "react-test-renderer": "^16.5.1",
    "standard": "^12.0.1",
    "webpack": "^4.19.0",
    "webpack-cli": "^3.1.0",
    "webpack-dev-server": "^3.1.8"
  },
  "dependencies": {
    "textarea-caret": "^3.1.0"
  },
  "peerDependencies": {
    "prop-types": "^15.6.2",
    "react": "^16.5.2",
    "react-dom": "^16.5.2"
  },
  "standard": {
    "parser": "babel-eslint"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/GerardoGallegos/react-rollup-boilerplate.git"
  },
  "bugs": {
    "url": "https://github.com/GerardoGallegos/react-rollup-boilerplate/issues"
  },
  "homepage": "https://github.com/GerardoGallegos/react-rollup-boilerplate#readme"
}
`
// TODO - Complete this section
// repo = https://github.com/GerardoGallegos/example
const rollup = (name, description, keywords, author, repo, licence = 'MIT') => `
{
  "name": "${name}",
  "version": "1.0.0",
  "description": "${description}",
  "main": "dist/index.js",
  "module": "dist/index.es.js",
  "jsnext:main": "dist/index.es.js",
  "scripts": {
    "test": "jest",
    "test:w": "jest --watch",
    "size": "size-limit",
    "build": "rollup -c",
    "start": "rollup -c -w"
  },
  "size-limit": [
    {
      "path": "dist/index.prod.js",
      "limit": "6 KB"
    }
  ],
  "keywords": [${keywords}],
  "author": "${author}",
  "license": "${licence}",
  "devDependencies": {
    "babel-core": "^6.26.3",
    "babel-eslint": "^9.0.0",
    "babel-jest": "^23.6.0",
    "babel-plugin-external-helpers": "^6.22.0",
    "babel-preset-env": "^1.7.0",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-react": "^6.24.1",
    "babel-preset-stage-0": "^6.24.1",
    "enzyme": "^3.6.0",
    "enzyme-adapter-react-16": "^1.5.0",
    "jest": "^23.6.0",
    "prop-types": "^15.6.2",
    "react": "^16.5.2",
    "react-dom": "^16.5.2",
    "regenerator-runtime": "^0.12.1",
    "rollup": "^0.66.0",
    "rollup-plugin-babel": "^3.0.7",
    "rollup-plugin-commonjs": "^9.1.8",
    "rollup-plugin-node-resolve": "^3.4.0",
    "rollup-plugin-peer-deps-external": "^2.2.0",
    "rollup-plugin-uglify": "^6.0.0",
    "rollup-plugin-url": "^1.4.0",
    "size-limit": "^0.20.0",
    "standard": "^12.0.1",
    "uglify-es": "^3.3.9"
  },
  "dependencies": {},
  "peerDependencies": {
    "prop-types": "^15.6.2",
    "react": "^15.0.0 || ^16.5.2",
    "react-dom": "^15.0.0 || ^16.5.2"
  },
  "standard": {
    "parser": "babel-eslint"
  },
  "engines": {
    "node": ">=8",
    "npm": ">=5"
  },
  "files": [
    "dist"
  ],
  "repository": {
    "type": "git",
    "url": "git+${repo}.git"
  },
  "bugs": {
    "url": "${repo}/issues"
  },
  "homepage": "${repo}#readme"
}
`

module.exports = (rootPath, bundler, babelPresets, babelPlugins) => {
  if (bundler === 'Webpack') {
    createFile(
      path.resolve(rootPath, 'package.json'),
      webpack(babelPresets, babelPlugins)
    )
  }

  if (bundler === 'Rollup') {
    createFile(
      path.resolve(rootPath, 'package.json'),
      rollup(babelPresets, babelPlugins)
    )
  }
}
