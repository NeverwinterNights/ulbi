import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import "./styles/index.scss"
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";


export const App = React.memo(() => {
    const {theme, toggleTheme} = useTheme() // кастомный хук
    return (
        <div className={classNames("app", {}, [theme])}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Link to={"/"}>На главную</Link>
            <Link to={"about"}>О компании</Link>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={"/"} element={<MainPage/>}/>
                    <Route path={"/about"} element={<AboutPage/>}/>
                </Routes>
            </Suspense>

        </div>
    );
});

