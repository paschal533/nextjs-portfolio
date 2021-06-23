

const path = require('path');
const { config } = require('process');

module.exports = {
    webpack: congif => {

        config.resolve.alias['@'] = path.resolve(__dirname);
        return congif;
    }
}
