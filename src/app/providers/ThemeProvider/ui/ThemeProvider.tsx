import React, {FC, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "../lib/ThemeContext";

export const ThemeProvider: FC = ({children}) => {

    const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT // преобразование из лс

    const [theme, setTheme] = useState<Theme>(defaultTheme);


    const defaultProps = useMemo(() => ({ // мемоизируем, чтобы каждый раз обьект не создавался вновь при рендеринге
        theme: theme,
        setTheme: setTheme
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

