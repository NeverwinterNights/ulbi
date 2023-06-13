import {BuildOptions} from "./types/config";
import webpack from "webpack";
import path from "path";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {

    const {mode, paths} = options
    return ({
        mode,
        entry:paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path:paths.build,
            clean: true,
        },
        plugins: buildPlugins(paths),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
        devtool: 'inline-source-map',
        devServer:buildDevServer(options),
    })
}




