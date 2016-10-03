const blacklist = require('react-native/packager/blacklist');

const config = {
    getBlacklistRE(platform) {
        return blacklist(platform, [
            /ui\/.*/
        ]);
    }
};

module.exports = config;