import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {/*<Route path={"/"} element={<MainPage/>}/>*/}
                {/*<Route path={"/about"} element={<AboutPage/>}/>*/}
                {Object.values(routeConfig).map(({element, path}) => (
                    <Route key={path} element={(
                        <Suspense fallback={<div>...Loading</div>}>{element}</Suspense>
                    )} path={path}/>
                ))}
            </Routes>
        </Suspense>
    );
};

