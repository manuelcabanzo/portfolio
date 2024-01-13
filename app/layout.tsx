import type { Metadata } from 'next'
import { Wix_Madefor_Display } from 'next/font/google'
import './globals.css'

const font = Wix_Madefor_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Manuel\'s Vault',
  description: 'Discover Manuel\'s creative works and projects.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
      </body>
    </html>
  )
}
