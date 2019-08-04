let cp = require('child_process');
let util = require('util');
let open = require('open');

module.exports = async (config) => {
    if (config.help) {
        console.log(`Usage: truffle run coverage`);
        done(null, [], []);
        return;
    }

    const exec = util.promisify(cp.exec);

    const { stdout, err } = await exec('npx solidity-coverage');
    console.log('stdout:', stdout);

    open('http://www.bing.com');

    console.log(`Truffle coverage executed successfully!`);
}