import React from 'react'
import { useTranslation } from 'react-i18next'

const About = React.memo(() => {
  const { i18n, t } = useTranslation('about')

  return <div>{t('О сайте')}</div>
})

export default About
