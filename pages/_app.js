import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
const local = localFont({
  src: [
    {
      path: './local/NimbusSanL-Reg.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './local/NimbusSanL-Bol.otf',
      weight: '700',
      style: 'normal',
    },
  ],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})


export default function App({ Component, pageProps }) {
  return <main className={`${local.className} font-sans-`}><Component {...pageProps} /></main>
}
