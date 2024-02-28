import Link from 'next/link'
import { Trans } from 'react-i18next/TransWithoutContext'
import { languages, fallbackLng } from '../i18n/settings'
import { useTranslation } from '../i18n'

export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng)
  return { title: t('h1') }
}

export default async function Page({ params: { lng } }) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng)

  return (
    <>
      {/* <DefaultLayout /> */}
      <main>
        <div>
          {/* <Link href={`/${lng}/tieu-hoc`}>
            <button type="button">{t('tieu-hoc')}</button>
          </Link> */}
          {/* <Link href={`/${lng}/thcs`}>
            <button type="button">{t('to-client-page')}</button>
          </Link>
          <Link href={`/${lng}/mam-non`}>
            <button type="button">{t('to-client-page')}</button>
          </Link> */}
        </div>
      </main>

    </>
  )
}
