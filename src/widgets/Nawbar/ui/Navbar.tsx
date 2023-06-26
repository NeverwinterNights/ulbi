import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import styles from "./Navbar.module.scss"
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

type  NavbarPropsType = {
    className?: string

}

export const Navbar = React.memo(({className}: NavbarPropsType) => {
    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} className={styles.mainLink} to={"/"}>На главную</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={"about"}>О компании</AppLink>
            </div>
        </div>
    );
});

