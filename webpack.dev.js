const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv");


module.exports = () => {

    // call dotenv and it will return an Object with a parsed key 
    const env = dotenv.config({ path: './config/dev.env' }).parsed;

    return {
        mode: "development",
        entry: "./src/App.tsx",
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".jsx"]
        },
        devServer: {
            port: 8888,
            historyApiFallback: true
        },
        module: {
        rules: [
            {
                test: /\.(t|j)sx?$/, 
                exclude: /node_modules/,
                use: ["ts-loader"]
            },
            { 
                test: /\.css$/, 
                exclude: /node_modules/,
                use:  ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/, 
                exclude: /node_modules/,
                loader:  ['file-loader?name=[name].[ext]', 'webp-loader']
            },
            {
                test: /\.(ico|mov)$/, 
                exclude: /node_modules/,
                loader:  "file-loader", 
                options: {
                    name: '[name].[ext]'
                }    
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                exclude: /node_modules/,
                loader: "file-loader"
            },
            {
                enforce: "pre",
                test: /\.js$/, 
                loader: "source-map-loader"
            }
        ] 
        },
        plugins: [
            new HtmlWebpackPlugin({ template: "./src/home.html"}),
            new webpack.DefinePlugin({ 
                "process.env.API_URL": JSON.stringify(env.API_URL)
            }),
        ],
        output: {
            path: path.resolve(__dirname, "./dist"),
            filename: "bundle.js"
        },
    };  
}

  

  