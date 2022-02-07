const { mergeWithCustomize } = require('webpack-merge');
const base = require('./webpack.base');
const helpers = require('./helpers');
const hotReloadingEntries = ['react-hot-loader/patch'];

module.exports = mergeWithCustomize({
    entry: 'prepend',
})(base, {
    mode: 'development',
    devtool: 'inline-source-map',
    stats: 'errors-only',
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom',
            core: helpers.resolveFromRootPath('src/core'),
            scenes: helpers.resolveFromRootPath('src/scenes'),
            pods: helpers.resolveFromRootPath('src/pods'),
            layout: helpers.resolveFromRootPath('src/layout'),
            common: helpers.resolveFromRootPath('src/common'),
            router: helpers.resolveFromRootPath('src/router'),
        },
    },
    entry: {
        app: hotReloadingEntries,
    },
    output: {
        path: helpers.resolveFromRootPath('dist'),
        filename: '[name].js',
    },
    devServer: {
        port: 8080,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[ext]',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
});
