import '../css/style.css'
import { dir } from 'i18next'
import { languages, fallbackLng } from '../i18n/settings'
import { useTranslation } from '../i18n'
import { Be_Vietnam_Pro, Playfair_Display } from 'next/font/google'

const inter = Be_Vietnam_Pro({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: '400'
})
const architects_daughter = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: '400',
  display: 'swap'
})


export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export async function generateMetadata({ params: { lng } }) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng)
  return {
    title: t('title'),
    content: 'A playground to explore new Next.js 13/14 app directory features such as nested layouts, instant loading states, streaming, and component level data fetching.'
  }
}

export default function RootLayout({
  children,
  params: {
    lng
  }
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body className={`${inter.variable} ${architects_daughter.variable}
       font-inter antialiased text-[#1f253a] tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          {children}
        </div>
      </body>
      {/* <body>
        {children}
      </body> */}
    </html>
  )
}
