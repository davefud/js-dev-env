# JavaScript Development Environment 
[![Travis Build Status][travis-tests]][travis-tests-url] [![AppVeyor Build Status][appveyor-tests]][appveyor-tests-url]

This is a generic JavaScript development environment and isn't tied to any specific JS framework.

## Requirements (Updated 5/22/2017)
* node `^6.10.3`
* npm `^4.0.2`

## Getting Started

After confirming that your development environment meets the specified [requirements](#requirements), you can follow these steps to get the project up and running:

### TL;DR
```bash
$ git clone https://github.com/davefud/js-dev-env.git
$ cd js-dev-env
$ npm install                   # Install project dependencies
$ npm start                     # Compiles and runs webpack and unit tests in watch mode
```

### RTFM
1. **Install [Node 6](https://nodejs.org)**. Need to run multiple versions of Node? Use [nvm](https://github.com/creationix/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows)
2. **Clone this repository.** - `git clone https://github.com/davefud/js-dev-env.git` or [download the zip](https://github.com/davefud/js-dev-env/archive/master.zip)
3. **Make sure you're in the directory you just created.** - `cd js-dev-env`
4. **Install Node Packages.** - `npm install`
5. **Run the app.** - `npm start -s`
This will run the automated build process, start up a webserver, and open the application in your default browser. When doing development with this kit, this command will continue watching files all your files. Every time you hit save the code is rebuilt, linting runs, and tests run automatically. Note: The -s flag is optional. It enables silent mode which suppresses unnecessary messages during the build.
6. Having issues? See below.

## Having Issues? Try these things first:

1. Run `npm install` - If you forget to do this, you'll see this: `babel-node: command not found`.
2. Make sure you're running the latest version of Node. Or, use [Node 6.10.3](https://nodejs.org/en/download/releases/) if you're having issues on Windows. Node 7 has issues on some Windows machines.
3. Make sure files with names that begin with a dot (.babelrc, .editorconfig, .eslintrc) are copied to the project directory root. This is easy to overlook if you copy this repository manually.
4. Don't run the project from a symbolic link. It will cause issues with file watches.
5. Having linting issues? Delete any .eslintrc that you're storing in your user directory. Also, disable any ESLint plugin / custom rules that you've enabled within your editor. These will conflict with the ESLint rules defined in the course.
6. Nothing above work? Delete your node_modules folder and re-run npm install.

While developing, you will probably rely mostly on `npm start`; however, there are additional scripts at your disposal:

|`npm run <script>`|Description|
|------------------|-----------|
|`start`|This will run the automated build process, starts up a webserver, performs a node security check for known vulnerabilities, starts linting in watch mode, runs unit tests in watch mode, generates mock data, starts a mock API server, and opens the application in your default browser.|
|`open:src`|TODO: Add description|
|`lint`|TODO: Add description|
|`lint:watch`|Starts webpack and test in non-watch mode using the development webpack configuration file.|
|`security-check`|TODO: Add description|
|`localtunnel`|TODO: Add description|
|`share`|TODO: Add description|
|`test`|Runs unit tests with Mocha in non-watch mode.|
|`test:watch`|Runs unit tests with Mocha in watch mode.|
|`generate-mock-data`|TODO: Add description|
|`start-mockapi`|TODO: Add description|
|`clean`|This removes and creates the './dist' folder.|
|`build`|Starts webpack in non-watch mode using the development webpack configuration file.|
|`deploy`|TODO: Add description|
|`script:help`|Shows the available commands described here.|

### Development Dependencies

| **Dependency**              | **Use**                                                                                                   |
| --------------------------- | --------------------------------------------------------------------------------------------------------- |
| babel-cli                   | Babel Command line interface                                                                              |
| babel-core                  | Babel Core for transpiling the new JavaScript to old                                                      |
| babel-loader                | Adds Babel support to Webpack                                                                             |
| babel-preset-env            | Babel preset that automatically determines the Babel plugins you need based on your supported environments.                                  |
| babel-register              | Register Babel to transpile our Mocha tests                                                               |
| chai                        | A BDD / TDD assertion library for node and the browser                                                    |
| chalk                       | Terminal string styling                                                                                   |
| cheerio                     | Supports querying DOM with jQuery like syntax - Useful in testing and build process for HTML manipulation |
| compression                 | Node.js compression middleware                                                                            |
| cross-env                   | Cross-environment friendly way to handle environment variables                                            |
| css-loader                  | Add CSS support to Webpack                                                                                |
| eslint                      | Lints JavaScript                                                                                          |
| eslint-plugin-import        | Advanced linting of ES6 imports                                                                           |
| eslint-watch                | Add watch functionality to ESLint                                                                         |
| eventsource-polyfill        | Polyfill to support hot reloading in IE                                                                   |
| express                     | Serves development and production builds                                                                  |
| extract-text-webpack-plugin | Extracts CSS into separate file for production build                                                      |
| html-webpack-plugin         | Simplifies creation of HTML files to serve your webpack bundles                                           |
| file-loader                 | Adds file loading support to Webpack                                                                      |
| jsdom                       | In-memory DOM for testing                                                                                 |
| mocha                       | JavaScript testing library                                                                                |
| npm-run-all                 | Display results of multiple commands on single command line                                               |
| open                        | Open app in default browser                                                                               |
| rimraf                      | Delete files                                                                                              |
| style-loader                | Add Style support to Webpack                                                                              |
| url-loader                  | Add url loading support to Webpack                                                                        |
| webpack                     | Bundler with plugin system and integrated development server                                              |
| webpack-dev-middleware      | Adds middleware support to webpack                                                                        |
| webpack-hot-middleware      | Adds hot reloading to webpack                                                                             |

[travis-tests]: https://travis-ci.org/davefud/js-dev-env.svg?branch=master
[travis-tests-url]: https://travis-ci.org/davefud/js-dev-env
[appveyor-tests]: https://ci.appveyor.com/api/projects/status/github/davefud/js-dev-env?branch=master&svg=true
[appveyor-tests-url]: https://ci.appveyor.com/project/davefud/js-dev-env

