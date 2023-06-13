import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";

export const buildLoaders = (): webpack.RuleSetRule[] => {

    const typesScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        typesScriptLoader
    ]
}

