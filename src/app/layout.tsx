import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'
import { colorModeManager, ColorModeScript, UIProvider } from '@yamada-ui/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ColorModeScript type="cookie" nonce="testing" />
        <UIProvider colorModeManager={{ ...colorModeManager }.cookieStorage}>{children}</UIProvider>
      </body>
    </html>
  )
}
