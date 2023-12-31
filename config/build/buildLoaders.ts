import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";

import {BuildOptions} from "./types/config";

export const buildLoaders = ({isDev}: BuildOptions): webpack.RuleSetRule[] => {

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const babelLoader = {
        exclude: /node_modules/,
        test: /\.(js|jsx|tsx)$/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env']
            }
        }
    }


    const cssLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes(".module")),
                        localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:8]"
                    },
                },
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    const typesScriptLoader = {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: 'ts-loader',
    };

    return [
        babelLoader, typesScriptLoader, cssLoaders, svgLoader, fileLoader,
    ]
}

