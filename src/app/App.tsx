import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import "./styles/index.scss"
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Nawbar";


export const App = React.memo(() => {
    const {theme, toggleTheme} = useTheme() // кастомный хук
    return (
        <div className={classNames("app", {}, [theme])}>
            <Navbar/>
            <button onClick={toggleTheme}>Toggle theme</button>

            <AppRouter/>

        </div>
    );
});

