import './globals.css'
import { Open_Sans } from 'next/font/google'
import Navbar from "app/(shared)/Navbar";
import Footer from './(shared)/Footer';
const openSans = Open_Sans({ subsets: ['latin'] })


export const metadata = {
  title: 'Blog AI App',
  description: 'An blog application built in Next JS and OpenAI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
