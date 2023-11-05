import React from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button'
import { ThemeButton } from 'shared/ui/Button/ui/Button'

type LangSwitcherPropsType = {
  className?: string
}

export const LangSwitcher = React.memo(({ className }: LangSwitcherPropsType) => {
  const { i18n, t } = useTranslation()

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      className={classNames('', {}, [className])}
      onClick={toggleLang}
      theme={ThemeButton.CLEAR}
    >
      {t('Язык')}
    </Button>
  )
})
