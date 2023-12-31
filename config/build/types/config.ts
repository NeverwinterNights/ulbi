export type BuildMode = "development" | "production"

export interface BuildPaths {
    build: string
    entry: string
    html: string
    src:string
}

export interface BuildEnv {
    mode:BuildMode
    port:number
}


export interface BuildOptions {
    isDev:boolean
    mode: BuildMode
    paths: BuildPaths
    port:number
}
