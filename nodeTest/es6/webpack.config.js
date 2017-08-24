var webpack = require('webpack');
module.exports = {
    entry: {
        'a/1': './1.js'
    },
//entry: {'dist/pservice/0.0.0/manage/view/proviews': '././js/manage/view/proviews.js'},
    output: {
        path: "./dist",
        filename: '[name].js',
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.less']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {test: /\.css$/, loader: "style!css"
            },
            {
                test: /\.less$/, loader: "style!css!less"}
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom'
        })
    ],
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
};