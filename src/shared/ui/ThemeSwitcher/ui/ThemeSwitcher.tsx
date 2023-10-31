import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import styles from "./ThemeSwitcher.module.scss"
import {Theme, useTheme} from "app/providers/ThemeProvider";
import LightIcon from "shared/assets/icons/theme-light.svg"
import DarkIcon from "shared/assets/icons/theme-dark.svg"
import {Button} from "shared/ui/Button";
import {ThemeButton} from "shared/ui/Button/ui/Button";

type  ThemeSwitcherPropsType = {
    className?: string

}

export const ThemeSwitcher = React.memo(({className}: ThemeSwitcherPropsType) => {
    const {theme, toggleTheme} = useTheme()


    return (
        <Button theme={ThemeButton.CLEAR} className={classNames(styles.themeSwitcher, {}, [className])} onClick={toggleTheme}>
            {theme === Theme.LIGHT ? <LightIcon/> : <DarkIcon/>}
        </Button>
    );
});
