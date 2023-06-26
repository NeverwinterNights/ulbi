import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import styles from "./AppLink.module.scss"
import {Link, LinkProps} from "react-router-dom";

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary"
}

interface AppLinkPropsType extends LinkProps {
    className?: string
    theme?: AppLinkTheme

}

export const AppLink: FC<AppLinkPropsType> = React.memo((props) => {
    const {className, theme = AppLinkTheme.PRIMARY, children, to, ...restProps} = props
    return (
        <Link to={to} className={classNames(styles.AppLink, {}, [className, styles[theme]])} {...restProps}>
            {children}
        </Link>
    );
});
