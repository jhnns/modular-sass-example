import * as path from "path";
import * as url from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createConfig = (_, {mode}) => {
    const isDevMode = mode === "development";

    return {
        entry: {
            main: "./src/main.js",
            bootstrap: "./src/styles/bootstrap.scss",
        },
        output: {
            clean: true,
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    include: path.resolve(__dirname, "src"),
                    use: [
                        isDevMode ? "style-loader" : MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader"
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin(),
            new MiniCssExtractPlugin(),
        ],
    };
}

export default createConfig;
