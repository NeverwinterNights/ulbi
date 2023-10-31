import React from 'react';
import "./styles/index.scss"
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Nawbar";
import {Sidebar} from "widgets/Sidebar";


export const App = React.memo(() => {
    const {theme} = useTheme() // кастомный хук
    return (
        <div className={classNames("app", {}, [theme])}>
            <Navbar/>
            <div className="content-page">
                <Sidebar/>
                <AppRouter/>
            </div>

        </div>
    );
});

