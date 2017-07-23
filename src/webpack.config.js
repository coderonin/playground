var path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = function(env){
    let plugins = [
        new ManifestPlugin(),
        new CleanWebpackPlugin([path.resolve(__dirname, '../dist')]),
        new HtmlWebpackPlugin({
            title: 'Paranoia de Melodias',
            template: path.resolve(__dirname, './web/index.html')
        })
    ];
    if(env == "prod"){
        plugins.push(new webpack.optimize.UglifyJsPlugin({
            sourceMap: false
        }));
    }
    return {
        entry: {
            game: path.resolve(__dirname, './web/index.js')
        },
        plugins: plugins,
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, '../dist')
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                },
                {
                    test: /\.scss$/,
                    use: [
                        "style-loader", // creates style nodes from JS strings
                        "css-loader", // translates CSS into CommonJS
                        "sass-loader" // compiles Sass to CSS
                    ]
                },
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader'
                    ]
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [
                        'file-loader'
                    ]
                }
            ]
        }
    };
};
