import React, {Suspense, useContext, useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import "./styles/index.scss"
import {MainLazy} from "./pages/main/Main.lazy";
import {AboutLazy} from "./pages/about/About.lazy";
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";


export const App = React.memo(() => {
    const {theme, toggleTheme} = useTheme() // кастомный хук
    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>Toggle theme</button>
            {/*<Counter/>*/}
            <Link to={"/"}>На главную</Link>
            <Link to={"about"}>О компании</Link>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={"/"} element={<MainLazy/>}/>
                    <Route path={"/about"} element={<AboutLazy/>}/>
                </Routes>
            </Suspense>

        </div>
    );
});

