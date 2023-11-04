import webpack from "webpack";

import {buildDevServer} from "./buildDevServer";
import {buildLoaders} from "./buildLoaders";
import {buildPlugins} from "./buildPlugins";
import {buildResolvers} from "./buildResolvers";
import {BuildOptions} from "./types/config";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {isDev, mode, paths} = options;

    return {
        devServer: isDev ? buildDevServer(options) : undefined,
        devtool: isDev ? 'inline-source-map' : undefined,
        entry: paths.entry,
        mode,
        module: {
            rules: buildLoaders(options)
        },
        output: {
            clean: true,
            filename: "[name].[contenthash].js",
            path: paths.build,
        },
        plugins: buildPlugins(options),
        resolve: buildResolvers(options),
    }
}

