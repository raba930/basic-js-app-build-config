const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const html = new HtmlWebpackPlugin({
    template: 'static/index.html',
    filename: 'index.html'
})

const extractSass = new ExtractTextPlugin({
    filename: "css/style.css"
});

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, "dist/"),
        publicPath: ''
    },
    module: {
        rules: [{
            test: /\.html$/,
            loader: 'html-loader'
        }, {
            test: /\.css$/,
            use: extractSass.extract({
                use: ['css-loader']
            })
        }, {
            test: /\.scss$/,
            use: extractSass.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            })
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader?name=/img/[name].[ext]'
            ]
        }, {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                'file-loader?name=/font/[name].[ext]'
            ]
        },
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        }
    ]},
    plugins: [
        extractSass,
        html
    ]
}