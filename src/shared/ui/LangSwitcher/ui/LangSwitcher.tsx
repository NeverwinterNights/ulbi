import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button";
import {ThemeButton} from "shared/ui/Button/ui/Button";
import styles from "./LangSwitcher.module.scss"

type  LangSwitcherPropsType = {
    className?: string

}

export const LangSwitcher = React.memo(({className}: LangSwitcherPropsType) => {

    const {t, i18n} = useTranslation();

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
    }

    return (
        <Button className={classNames(styles.langSwitcher, {}, [className])} theme={ThemeButton.CLEAR}
                onClick={toggleLang}>{t("Язык")}</Button>

    );
});
