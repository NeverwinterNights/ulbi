import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {/*<Route path={"/"} element={<MainPage/>}/>*/}
                {/*<Route path={"/about"} element={<AboutPage/>}/>*/}
                {Object.values(routeConfig).map(({element, path}) => (
                    <Route key={path} element={
                        <div className="page-wrapper">{element}</div>
                    } path={path}/>
                ))}
            </Routes>
        </Suspense>
    );
};

