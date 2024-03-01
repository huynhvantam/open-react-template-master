import Link from 'next/link'
import { Trans } from 'react-i18next/TransWithoutContext'
import { languages, fallbackLng } from '../i18n/settings'
import { useTranslation } from '../i18n'
import DefaultLayout from './DefaultLayout'
import Footer from '../components/ui/footer'

export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng)
  return { title: t('h1') }
}

export default function Page({ params: { lng } }) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng

  return (
    <>

      <DefaultLayout lng={lng} />

    </>
  )
}
