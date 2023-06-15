import React from 'react';
import {Counter} from "./components/Counter";
import "./index.scss"

export const App =React.memo(() => {
 return (
        <div className="app">
            <Counter/>
        </div>
    );
});

