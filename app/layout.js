import Navbar from '@/components/core/navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import WalletConnectConfig from '@/components/core/walletconnect_config'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
           <body suppressHydrationWarning={true}>
        <WalletConnectConfig children={children} />
      </body>
    </html>
  )
}
