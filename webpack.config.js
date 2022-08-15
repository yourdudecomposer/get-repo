const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    devServer: {
        client: {
            reconnect: false,
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: 'src/index.html'

        }),
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(woff|woff2)$/i,
                type: 'asset/resource',
            },
        ],
    },
};