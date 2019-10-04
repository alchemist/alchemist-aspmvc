const {resolve} = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'production',
    target: "electron-renderer",
    entry: './src/index.ts',
    output: {
        path: resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'index.js',
        libraryTarget: "commonjs2"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'scss': 'vue-style-loader!css-loader!sass-loader'
                    }
                }
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    "sass-loader"
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        modules: ["./node_modules"]
    },
    externals: [
        "@treacherous/core",
        "@treacherous/view",
        "@treacherous/vue",
        "@treacherous/decorators",
        "@alchemist/core",
        {"@alchemist/dotnet": "../dotnet/index.js"},
        "uuid",
        "interactjs",
        "tslib",
        "vue",
        "vue-class-component",
        "vue-property-decorator",
        "vuex",
        "vuex-class"
    ],
    optimization: {
        minimize: false
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};