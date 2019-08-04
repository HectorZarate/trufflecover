# Truffle Cover - A simple solidity code coverage tool for Truffle.

This is a plug in for Truffle that will execute code coverage tests from Truffle and display the results the user.

## Prereqs

There are a few things you will need to leverage this extension.

* [NodeJS](https://nodejs.org/)
* Truffle : `npm install truffle -g`

## Install

To install simply download the plugins and run from truffle:

```
npm install truffle-coverage-plugin

truffle run coverage
```

`NOTE: You will need to have a truffle project with at least one smart contract, migration and test`