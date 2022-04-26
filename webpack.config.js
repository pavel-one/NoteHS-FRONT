const path = require('path')
const webpack = require('webpack')

module.exports = {
    resolve: {
        extensions: ['.js', '.json', '.vue'],
        alias: {
            '@': path.join(__dirname, 'resources/js'),
            '@components': path.join(__dirname, 'resources/js/components'),
            '@pages': path.join(__dirname, 'resources/js/Pages'),
            '@store': path.join(__dirname, 'resources/js/Store'),
            '@sass': path.join(__dirname, 'resources/scss'),
        }
    },
}