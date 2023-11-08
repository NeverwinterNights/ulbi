import React from 'react'
import {useTranslation} from 'react-i18next'
import {BugButton} from "app/providers/ErrorBoundary";

const About = React.memo(() => {
    const {i18n, t} = useTranslation('about')

    return <div>
        <BugButton/>
        {t('О сайте')}
    </div>
})

export default About
