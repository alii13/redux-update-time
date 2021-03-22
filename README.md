[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

![redux-update-time](https://socialify.git.ci/alii13/redux-update-time/image?description=1&descriptionEditable=&forks=1&issues=1&language=1&owner=1&pulls=1&stargazers=1&theme=Light)

> A lightweight middleware of redux for logging the store update time difference in milliseconds ( upto .12 precesion) on console from an action

## Console View
![Console View](https://i.ibb.co/GHHZCKv/redux-Time.png)

## Prerequisites

This project requires NodeJS (version 8 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
6.4.1
v8.16.0
```

## Table of contents

  - [Installation](#installation)
  - [Usage](#usage)
    - [Example](#example)
    - [Running the tests](#running-the-tests)
  - [Contributing](#contributing)
  - [Authors](#authors)
  - [License](#license)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

Start with cloning this repo on your local machine:

```sh
$ git clone https://github.com/alii13/redux-update-time.git
$ cd redux-update-time
```

To install and set up the library, run:

```sh
$ npm install --save-dev redux-update-time
```

Or if you prefer using Yarn:

```sh
$ yarn add --dev redux-update-time
```

## Usage

### Example

```js
import { applyMiddleware, createStore } from 'redux';
 
// Logger with default options
import reduxTime from 'redux-update-time'
const store = createStore(
  reducer,
  applyMiddleware(reduxTime)
)
 
// Note passing middleware as the third argument requires redux@>=3.1.0
```

### Running the tests

```sh
$ npm test
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -am 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request :sunglasses:

## Authors

* **Shekh Aliul** - *Initial work* - [Shekh Aliul](https://github.com/alii13)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

[MIT License](https://alii13.mit-license.org/2019) © Shekh Aliul
