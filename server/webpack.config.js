const path = require( 'path' );
module.exports = {
    mode: "production",
    context: __dirname,
    entry: './app.js',
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            }
        ]
    }
};