module.exports = {
    entry: {
        _index_bundle: './js/_entry_index.js',
        _html_bundle: './js/_entry_index.js',
        _h5_bundle: './js/_entry_index.js',
        _js_bundle: './js/_entry_index.js',
        _contact_bundle: './js/_entry_index.js'
    },
    output: {
        path: __dirname + '/build',
        filename: './js/[name].js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.(png|jpg|jpeg|gif)$/,
            loader: 'path-file-loader',
            query: {
                name: '[name].[hash].[ext]',
                publicPath: './images/',
                cssPath: './build/images/'
            }
        }, {
            test: /\.(svg|woff|woff2|ttf|eot)$/,
            loader: 'path-file-loader',
            query: {
                name: '[name].[hash].[ext]',
                publicPath: './fonts/',
                cssPath: './build/fonts/'
            }
        }]
    }
};
