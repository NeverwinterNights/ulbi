import React from 'react';
import {useTranslation} from "react-i18next";

const About = React.memo(() => {
    const {t, i18n} = useTranslation("about");

    return (
        <div>
            {t("О сайте")}
        </div>
    );
});

export default About
