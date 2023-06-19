# www.surrealdb.com

The web application for [surrealdb.com](https://surrealdb.com) built using Ember.js.

[![](https://img.shields.io/badge/license-Apache_License_2.0-00bfff.svg?style=flat-square)](https://github.com/surrealdb/surrealdb.py)

<br>

# Contributing
Every contribution is welcome! Here is some basic information on how to get started with running and changing the SurrealDB website locally for development.

- Make sure you have [node](https://nodejs.org) & [npm](https://npmjs.com) installed on your system ([Here's a great guide by NPM!](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm))
- Clone the repository, optionally your own fork
  - Via HTTPS: `git clone https://github.com/USERNAME/www.surrealdb.com`
  - Via SSH: `git clone git@github.com:USERNAME/www.surrealdb.com`
- Install dependencies
  - `npm install`
- Start the development version of the website
  - `npm run start`
- After the process started, you can access the website at: http://localhost:4200

## Where can I find what?

- Pages are stored in `app/templates`
- Snippets are often stored in `app/snippets`

## Adding a new page

- Add your page in `app/templates`
- Add the route in `app/router.js`
- Add the route in possible sidebars/overview pages/etc...

## Add a language for code highlighting
Most languages should be available out of the box. 
Please adjust the files accordingly:

- `app/initializers/prism.js`
- `app/instance-initializers/marked.js`

## Common issues

If you see an error related to `ERR_OSSL_EVP_UNSUPPORTED` (mostly Node 17 and above), please include the `--openssl-legacy-provider` flag in the `NODE_OPTIONS` environment variable.
